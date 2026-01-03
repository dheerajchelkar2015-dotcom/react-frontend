import HeroCarousel from "@/pages/users/Carouesol/HeroCareouesol";
import useProductStore from "@/store/ProductStore";
import { useEffect } from "react";
import ProductRow from "./ProductRow";

export default function Dashboard() {
  const { products, fetchProducts, removeProduct } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="space-y-12 px-6 py-6">
      {/* Carousel */}
      <HeroCarousel />

      {/* Cards Row */}
      <ProductRow products={products} onDelete={removeProduct} />
    </div>
  );
}
