// src/services/plantService.ts
import apiClient from "@/config/ApiClient";
import type { Plant, PlantForm } from "@/models/Plant";

export const getPlants = async (): Promise<Plant[]> => {
  const res = await apiClient.get("/plants");
  return res.data;
};

export const createPlant = async (
  plant: PlantForm,
  image: File
): Promise<Plant> => {
  const formData = new FormData();

  formData.append(
    "plant",
    new Blob([JSON.stringify(plant)], { type: "application/json" })
  );
  formData.append("image", image);

  const res = await apiClient.post("/plants", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};


export const updatePlant = async (
  id: number,
  plant: PlantForm,
  image?: File
): Promise<Plant> => {
  const formData = new FormData();

  const payload = {
    ...plant,
    price: Number(plant.price),
    quantity: Number(plant.quantity),
  };

  formData.append(
    "plant",
    new Blob([JSON.stringify(payload)], { type: "application/json" })
  );

  if (image) {
    formData.append("image", image);
  }

  const res = await apiClient.put(`/plants/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};




export const deletePlant = async (id: number) => {
  await apiClient.delete(`/plants/${id}`);
};
