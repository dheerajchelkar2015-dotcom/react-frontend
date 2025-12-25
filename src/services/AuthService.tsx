import type RegisterData from "@/models/RegisterData"
import type LoginData from "@/models/LoginData";
import apiClient from "@/config/ApiClient"
import type LoginResponseData from "@/models/LoginResponseData";

export const registerUser = async (signupData : RegisterData)=>{
    const response = await apiClient.post(`/auth/register`,signupData);
    return response.data;
};

export const loginUser = async (loginData:LoginData) => {
    const response = await apiClient.post<LoginResponseData>(`/auth/login`,loginData);
    return response.data;
}

export const logoutUser = async () =>{
    const response = await apiClient.post(`/auth/logout`);
    return response.data;
}