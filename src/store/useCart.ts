import { create } from "zustand";
import type { Product } from "@/models/Product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (plant: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
}

const useCart = create<CartState>((set, get) => ({
  items: [],

  addToCart: (plant) => {
    const items = get().items;
    const existing = items.find((i) => i.id === plant.id);

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === plant.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({
        items: [...items, { ...plant, quantity: 1 }],
      });
    }
  },

  increaseQty: (id) =>
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    }),

  decreaseQty: (id) =>
    set({
      items: get().items
        .map((i) =>
          i.id === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0), // auto-remove if 0
    }),

  removeFromCart: (id) =>
    set({
      items: get().items.filter((i) => i.id !== id),
    }),

  clearCart: () => set({ items: [] }),
}));

export default useCart;
