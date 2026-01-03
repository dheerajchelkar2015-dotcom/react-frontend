// src/store/productStore.ts
import { create } from "zustand";
import type { Product, ProductForm } from "@/models/Product";
import * as productService from "@/services/ProductService";
import toast from "react-hot-toast";

interface ProductState {
  products: Product[];
  loading: boolean;

  fetchProducts: () => Promise<void>;
  addProduct: (product: ProductForm, image: File) => Promise<void>;
  removeProduct: (id: number) => Promise<void>;

  updateProduct: (
    id: number,
    product: ProductForm,
    image?: File
  ) => Promise<void>;
}

const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const data = await productService.getProducts();
      set({ products: data });
    } catch {
      toast.error("Failed to load products");
    } finally {
      set({ loading: false });
    }
  },

  addProduct: async (product, image) => {
    try {
      const newProduct = await productService.createProduct(product, image);
      set((state) => ({ products: [...state.products, newProduct] }));
      toast.success("Product added successfully 🌱");
    } catch {
      toast.error("Failed to add product");
    }
  },

  removeProduct: async (id) => {
    try {
      await productService.deleteProduct(id);
      set((state) => ({
        products: state.products.filter((p) => p.id !== id),
      }));
      toast.success("Product deleted");
    } catch {
      toast.error("Delete failed");
    }
  },

  updateProduct: async (id, product, image) => {
  try {
    const updated = await productService.updateProduct(id, product, image);

    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? updated : p
      ),
    }));

    toast.success("Product updated 🌿");
  } catch {
    toast.error("Update failed");
  }
},

}));

export default useProductStore;
