import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/models/Product";
import { Pencil, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";

import useCart from "@/store/useCart";
import UpdateProductModal from "../products/UpdatePlantModal";


interface Props {
  product: Product;
  onDelete: () => void;
}
export default function ProductCard({ product, onDelete }: Props) {


  const [openEdit, setOpenEdit] = useState(false);
const addToCart = useCart((state) => state.addToCart);

  
  return (
    <Card
      className="
        group flex flex-col
        h-auto rounded-[12px]
        bg-[#eaf0ec]
        shadow-[6px_6px_14px_#cfd8d3,-6px_-6px_14px_#ffffff]
        hover:shadow-[inset_5px_5px_10px_#cfd8d3,inset_-5px_-5px_10px_#ffffff]
        transition-all duration-300

        dark:bg-[#0f172a]
        dark:shadow-[6px_6px_14px_#020617,-6px_-6px_14px_#1f2933]
        dark:hover:shadow-[inset_5px_5px_10px_#020617,inset_-5px_-5px_10px_#1f2933]
      "
    >
      {/* Image */}
      <div className="relative h-[160px] overflow-hidden">
        <img
          src={`http://localhost:8083/${product.imageUrl}`}
          alt={product.name}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Price */}
        <div
          className="
            absolute bottom-3 right-3
            rounded-full px-3 py-1 text-xs font-semibold
            bg-[#eaf0ec]
            text-emerald-700
            shadow-[4px_4px_8px_#cfd8d3,-4px_-4px_8px_#ffffff]

            dark:bg-[#0f172a]
            dark:text-emerald-400
            dark:shadow-[4px_4px_8px_#020617,-4px_-4px_8px_#1f2933]
          "
        >
          ₹ {product.price}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1">
            {product.tag}
          </p>
        </div>

        {/* Category */}
        <span
          className="
            w-fit rounded-full px-3 py-1 text-xs
            text-black
            bg-[#eaf0ec] 
            shadow-[inset_3px_3px_6px_#cfd8d3,inset_-3px_-3px_6px_#ffffff]

            dark:bg-[#0f172a]
            dark:text-black dark:bg-white
            dark:shadow-[inset_3px_3px_6px_#e5e7eb,inset_-3px_-3px_6px_#ffffff]
          "
        >
          {product.category.name}
        </span>

        {/* Button pinned to bottom */}
<Button
  size="sm"
  onClick={() => addToCart(product)}
  className="
            mt-auto w-full rounded-xl
            bg-[#eaf0ec] text-gray-800
            shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
            hover:text-emerald-700
              hover:bg-[#eaf0ec]
            hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

            dark:bg-[#0f172a] dark:text-emerald-400
            dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
            dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
        
            transition-all
          "
>
  <ShoppingCart className="mr-2 h-4 w-4" />
  Add To Cart
</Button>


                {/* Update Product */}
        <Button
          size="sm"
          onClick={() => setOpenEdit(true)}
          className="
            mt-auto w-full rounded-xl
            bg-[#eaf0ec] text-gray-800
            shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
            hover:text-emerald-700
              hover:bg-[#eaf0ec]
            hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

            dark:bg-[#0f172a] dark:text-emerald-400
            dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
            dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
        
            transition-all
          "
        >
          <Pencil className="mr-2 h-4 w-4" />
          Update Product
        </Button>

        {openEdit && (
  <UpdateProductModal
    product={product}
    onClose={() => setOpenEdit(false)}
  />
)}


        {/* Delete */}
         <Button
          onClick={onDelete}
          size="sm"

          className="
  rounded-full
  bg-[#eaf0ec] w-full rounded-xl bg-[#eaf0ec] text-red-500
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-red-500
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

  transition-all
"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Product
        </Button> 

        
      </div>
    </Card>
  );
}
