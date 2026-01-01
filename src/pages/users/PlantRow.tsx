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
      <div
        className="
          flex gap-6
          overflow-x-auto
          pb-6
          px-6
          [&>*]:shrink-0
          scrollbar-hide
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

      {/* Confirmation Modal */}
      <ConfirmModal
        open={openModal}
        message={`Are you sure you want to delete ${selectedPlant?.name}?`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancel}
      />
    </>
  );
}
