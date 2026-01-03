// src/services/productService.ts
import apiClient from "@/config/ApiClient";
import type { Product, ProductForm } from "@/models/Product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await apiClient.get("/products");
  return res.data;
};

export const createProduct = async (
  product: ProductForm,
  image: File
): Promise<Product> => {
  const formData = new FormData();

  formData.append(
    "product",
    new Blob([JSON.stringify(product)], { type: "application/json" })
  );
  formData.append("image", image);

  const res = await apiClient.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};


export const updateProduct = async (
  id: number,
  product: ProductForm,
  image?: File
): Promise<Product> => {
  const formData = new FormData();

  const payload = {
    ...product,
    price: Number(product.price),
    quantity: Number(product.quantity),
  };

  formData.append(
    "product",
    new Blob([JSON.stringify(payload)], { type: "application/json" })
  );

  if (image) {
    formData.append("image", image);
  }

  const res = await apiClient.put(`/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};




export const deleteProduct = async (id: number) => {
  await apiClient.delete(`/products/${id}`);
};
