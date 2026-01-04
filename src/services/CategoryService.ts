import apiClient from "@/config/ApiClient";
import type { Category, CategoryForm } from "@/models/Category";

export const getCategories = async (): Promise<Category[]> => {
  const res = await apiClient.get("/categories");
  return res.data;
};

export const createCategory = async (
  category: CategoryForm
): Promise<Category> => {
  const res = await apiClient.post("/categories", category);
  return res.data;
};
