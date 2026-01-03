import { useState } from "react";
import ProductCard from "@/pages/users/ProductCard";
import type { Product } from "@/models/Product";
import ConfirmModal from "@/pages/products/ConfirmModal";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
}

export default function ProductRow({ products, onDelete }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleDeleteClick = (product: Product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      onDelete(selectedProduct.id);
    }
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const handleCancel = () => {
    setOpenModal(false);
    setSelectedProduct(null);
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={() => handleDeleteClick(product)}
          />
        ))}
      </div>

      {/* 🔥 Confirmation Modal */}
      <ConfirmModal
        open={openModal}
        title="Delete Product"
        message={`Are you sure you want to delete "${selectedProduct?.name}"?`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancel}
      />
    </>
  );
}
