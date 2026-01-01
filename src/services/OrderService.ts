import apiClient from "@/config/ApiClient";
import type CheckoutRequest from "@/models/CheckoutRequest";

export const checkoutOrder = async (data: CheckoutRequest) => {
  const response = await apiClient.post(`/orders/checkout`, data);
  return response.data;
};
