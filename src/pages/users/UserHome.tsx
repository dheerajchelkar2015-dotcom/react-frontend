import HeroCarousel from "@/pages/users/Carouesol/HeroCareouesol";
import usePlantStore from "@/store/PlantStore";
import { useEffect } from "react";
import PlantRow from "./PlantRow";

export default function Dashboard() {
  const { plants, fetchPlants, removePlant } = usePlantStore();

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div className="space-y-12 px-6 py-6">
      {/* Carousel */}
      <HeroCarousel />

      {/* Cards Row */}
      <PlantRow plants={plants} onDelete={removePlant} />
    </div>
  );
}
