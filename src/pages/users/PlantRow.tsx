import { useState } from "react";
import PlantCard from "@/pages/users/PlantCard";
import type { Plant } from "@/models/Plant";
import ConfirmModal from "@/pages/plants/ConfirmModal";

interface Props {
  plants: Plant[];
  onDelete: (id: number) => void;
}

export default function PlantRow({ plants, onDelete }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const handleDeleteClick = (plant: Plant) => {
    setSelectedPlant(plant);
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedPlant) {
      onDelete(selectedPlant.id);
    }
    setOpenModal(false);
    setSelectedPlant(null);
  };

  const handleCancel = () => {
    setOpenModal(false);
    setSelectedPlant(null);
  };

  return (
    <>
      {/* 🌱 Grid Layout */}
      <div
       className="
    grid px-6 pb-6
    gap-x-6 gap-y-6
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-5
    auto-rows-min
    items-start
  "
      >
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDelete={() => handleDeleteClick(plant)}
          />
        ))}
      </div>

      {/* 🔥 Confirmation Modal */}
      <ConfirmModal
        open={openModal}
        title="Delete Plant"
        message={`Are you sure you want to delete "${selectedPlant?.name}"?`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancel}
      />
    </>
  );
}
