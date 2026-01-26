import { useState } from "react";
import { Button } from "@/components/ui/button";
import useProductStore from "@/store/ProductStore";
import type { Product, ProductForm } from "@/models/Product";
import { Input } from "@/components/ui/input";
import { ImagePlus, X } from "lucide-react";
import { useEffect } from "react";
import useCategoryStore from "@/store/categoryStore";


interface Props {
  product: Product;
  onClose: () => void;
}

export default function UpdateProductModal({ product, onClose }: Props) {
  const { updateProduct } = useProductStore();

  const [form, setForm] = useState<ProductForm>({
    name: product.name,
    tag: product.tag,
    categoryId: product.category?.id ?? 0,
    price: product.price !== undefined ? String(product.price) : "",
    quantity: product.quantity !== undefined ? String(product.quantity) : "",
  });


  useEffect(() => {
    console.log("PRODUCT DATA 👉", product);
  }, [product]);


  const [image, setImage] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file?: File) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    await updateProduct(
      product.id,
      {
        name: form.name,
        tag: form.tag,
        categoryId: form.categoryId,
        price: form.price,
        quantity: form.quantity,
      },
      image
    );

    onClose();
  };

  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);




  useEffect(() => {
    if (product.imageUrl) {
      setPreview(`http://localhost:8083/${product.imageUrl}?t=${Date.now()}`);
    }
  }, [product]);


  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="
      relative w-[420px] p-8 rounded-[28px]
      bg-[#eef3ef]
      shadow-[5px_5px_12px_#cfd8d3,-5px_-5px_12px_#ffffff]

      dark:bg-[#0f172a]
      dark:shadow-[5px_5px_12px_#020617,-5px_-5px_12px_#1f2933]
    "
      >
        <button
          type="button"
          onClick={onClose}
          className="
    absolute top-4 right-4
    p-2 rounded-full
    transition

    bg-[#eaf0ec]
    shadow-[4px_4px_8px_#cfd8d3,-4px_-4px_8px_#ffffff]
    hover:shadow-[inset_2px_2px_4px_#cfd8d3,inset_-2px_-2px_4px_#ffffff]

    dark:bg-[#0f172a]
    dark:shadow-[4px_4px_8px_#020617,-4px_-4px_8px_#1f2933]
    dark:hover:shadow-[inset_2px_2px_4px_#020617,inset_-2px_-2px_4px_#1f2933]
  "
        >
          <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </button>
        <h2 className="text-lg font-semibold mb-6">
          Update Product 🌱
        </h2>

        {/* Inputs */}

        <div className="space-y-4">
          {[
            { key: "name", label: "Product Name" },
            { key: "tag", label: "Tag" },
            { key: "price", label: "Price" },
            { key: "quantity", label: "Quantity" },
          ].map(({ key, label }) => (
            <Input
              key={key}
              placeholder={label}
              value={form[key as keyof ProductForm]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
              className="
      rounded-xl px-4 py-3
      bg-[#eaf0ec] text-gray-700
      shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]
      focus:ring-2 focus:ring-emerald-400

      dark:bg-[#0f172a] dark:text-gray-200
      dark:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
      dark:focus:ring-emerald-500
    "
            />
          ))}
        </div>
 <div className="space-y-4">
        <select
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: Number(e.target.value) })
          }
          className="
    rounded-xl px-4 py-3 mt-5 w-full
    bg-[#eaf0ec] text-gray-700
      shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]
      focus:ring-2 focus:ring-emerald-400

      dark:bg-[#0f172a] dark:text-gray-200
      dark:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
      dark:focus:ring-emerald-500
  "
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
</div>


        {/* Drag & Drop Upload */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            handleFile(e.dataTransfer.files?.[0] || null);
          }}
          className={`
          relative flex flex-col items-center justify-center mt-5
          h-44 rounded-2xl cursor-pointer
          transition-all

          bg-[#eaf0ec]
          shadow-[inset_6px_6px_12px_#cfd8d3,inset_-6px_-6px_12px_#ffffff]

          dark:bg-[#0f172a]
          dark:shadow-[inset_6px_6px_12px_#020617,inset_-6px_-6px_12px_#1f2933]

          ${dragOver ? "ring-2 ring-emerald-400" : ""}
        `}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <input
            id="fileInput"
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />

          {!preview ? (
            <>
              <ImagePlus className="h-8 w-8 text-emerald-500 mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Drag & drop image or click to upload
              </p>
            </>
          ) : (
            <>
              <img
                src={preview}
                alt="Preview"
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(undefined);
                  setPreview(null);
                }}
                className="
                absolute top-2 right-2 p-2 rounded-full
                bg-[#eaf0ec]
                shadow-[4px_4px_8px_#cfd8d3,-4px_-4px_8px_#ffffff]

                dark:bg-[#0f172a]
                dark:shadow-[4px_4px_8px_#020617,-4px_-4px_8px_#1f2933]
              "
              >
                <X className="h-4 w-4 text-red-500" />
              </button>
            </>
          )}
        </div>

        <Button onClick={handleSubmit} className="w-full mt-6">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
