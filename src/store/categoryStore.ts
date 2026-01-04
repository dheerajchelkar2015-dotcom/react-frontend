import { create } from "zustand";
import type { Category, CategoryForm } from "@/models/Category";
import * as categoryService from "@/services/CategoryService";
import toast from "react-hot-toast";

interface CategoryState {
  categories: Category[];
  loading: boolean;

  fetchCategories: () => Promise<void>;
  addCategory: (category: CategoryForm) => Promise<void>;
}

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  loading: false,

  fetchCategories: async () => {
    set({ loading: true });
    try {
      const data = await categoryService.getCategories();
      set({ categories: data });
    } catch {
      toast.error("Failed to load categories");
    } finally {
      set({ loading: false });
    }
  },

  addCategory: async (category) => {
    try {
      const newCategory = await categoryService.createCategory(category);
      set((state) => ({
        categories: [...state.categories, newCategory],
      }));
      toast.success("Category added 🌿");
    } catch {
      toast.error("Failed to add category");
    }
  },
}));

export default useCategoryStore;
