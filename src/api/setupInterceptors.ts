// src/api/setupInterceptors.ts
import useAuth from "@/auth/store";
import { refreshToken } from "@/services/AuthService";
import type { AxiosInstance } from "axios";

let isRefreshing = false;
let pending: any[] = [];

function queueRequest(cb: any) {
  pending.push(cb);
}

function resolveQueue(newToken: string | null) {
  pending.forEach(cb => cb(newToken));
  pending = [];
}

export function setupInterceptors(api: AxiosInstance) {
  // Request interceptor
  api.interceptors.request.use(config => {
    const token = useAuth.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Response interceptor
  api.interceptors.response.use(
    response => response,
    async error => {
      const original = error.config;

      if (error.response?.status !== 401 || original._retry) {
        return Promise.reject(error);
      }

      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queueRequest((newToken: string | null) => {
            if (!newToken) return reject(error);
            original.headers.Authorization = `Bearer ${newToken}`;
            resolve(api(original));
          });
        });
      }

      isRefreshing = true;

      try {
        const loginResponse = await refreshToken();
        const newToken = loginResponse.accessToken;

        if (!newToken) throw new Error("No access token");

        useAuth
          .getState()
          .changeLocalLoginData(newToken, loginResponse.user, true);

        resolveQueue(newToken);

        original.headers.Authorization = `Bearer ${newToken}`;
        return api(original);
      } catch (err) {
        resolveQueue(null);
        useAuth.getState().logout();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
  );
}
