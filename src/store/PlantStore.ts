// src/store/plantStore.ts
import { create } from "zustand";
import type { Plant, PlantForm } from "@/models/Plant";
import * as plantService from "@/services/PlantService";
import toast from "react-hot-toast";

interface PlantState {
  plants: Plant[];
  loading: boolean;

  fetchPlants: () => Promise<void>;
  addPlant: (plant: PlantForm, image: File) => Promise<void>;
  removePlant: (id: number) => Promise<void>;

  updatePlant: (
    id: number,
    plant: PlantForm,
    image?: File
  ) => Promise<void>;
}

const usePlantStore = create<PlantState>((set) => ({
  plants: [],
  loading: false,

  fetchPlants: async () => {
    set({ loading: true });
    try {
      const data = await plantService.getPlants();
      set({ plants: data });
    } catch {
      toast.error("Failed to load plants");
    } finally {
      set({ loading: false });
    }
  },

  addPlant: async (plant, image) => {
    try {
      const newPlant = await plantService.createPlant(plant, image);
      set((state) => ({ plants: [...state.plants, newPlant] }));
      toast.success("Plant added successfully 🌱");
    } catch {
      toast.error("Failed to add plant");
    }
  },

  removePlant: async (id) => {
    try {
      await plantService.deletePlant(id);
      set((state) => ({
        plants: state.plants.filter((p) => p.id !== id),
      }));
      toast.success("Plant deleted");
    } catch {
      toast.error("Delete failed");
    }
  },

  updatePlant: async (id, plant, image) => {
  try {
    const updated = await plantService.updatePlant(id, plant, image);

    set((state) => ({
      plants: state.plants.map((p) =>
        p.id === id ? updated : p
      ),
    }));

    toast.success("Plant updated 🌿");
  } catch {
    toast.error("Update failed");
  }
},

}));

export default usePlantStore;
