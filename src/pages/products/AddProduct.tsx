import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useProductStore from "@/store/ProductStore";
import { ImagePlus, X } from "lucide-react";
import useCategoryStore from "@/store/categoryStore";
import { useEffect } from "react";


export default function AddProduct() {
  const { addProduct } = useProductStore();

  const [form, setForm] = useState({
    name: "",
    tag: "",
categoryId: "",

    price: "",
    quantity: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const { categories, fetchCategories } = useCategoryStore();

useEffect(() => {
  fetchCategories();
}, [fetchCategories]);


  const handleFile = (file: File | null) => {
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const submit = async () => {
  if (!image || !form.categoryId) return;

  await addProduct(
    {
      ...form,
      categoryId: Number(form.categoryId),
    },
    image
  );

  setForm({
    name: "",
    tag: "",
    categoryId: "",
    price: "",
    quantity: "",
  });
  setImage(null);
  setPreview(null);
};


  return (
    <div className="p-5">
<div
      className="
        max-w-xl mx-auto space-y-6 p-5 rounded-3xl
        bg-[#eaf0ec]
        shadow-[10px_10px_20px_#cfd8d3,-10px_-10px_20px_#ffffff]

        dark:bg-[#0f172a]
        dark:shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1f2933]
      "
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Add New Product 🌱
      </h2>

      {/* Inputs */}
      {[
        { key: "name", label: "Product Name" },
        { key: "tag", label: "Tag" },
        { key: "price", label: "Price" },
        { key: "quantity", label: "Quantity" },
      ].map(({ key, label }) => (
        <Input
          key={key}
          placeholder={label}
          value={(form as any)[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
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

      <select
  value={form.categoryId}
  onChange={(e) =>
    setForm({ ...form, categoryId: e.target.value })
  }
  className="
    rounded-xl px-4 py-3 w-full
            bg-[#eaf0ec] text-gray-700
            shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]
            

            dark:bg-[#0f172a] dark:text-gray-200
            dark:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
           
  "
>
  <option value="">Select Category</option>
  {categories.map((c) => (
    <option key={c.id} value={c.id}>
      {c.name}
    </option>
  ))}
</select>


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
          relative flex flex-col items-center justify-center
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
          onChange={(e) => handleFile(e.target.files?.[0] || null)}
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
                setImage(null);
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

      {/* Submit */}
      <Button
        onClick={submit}
        className="
          w-full rounded-xl py-3 font-semibold
          bg-[#eaf0ec] text-emerald-700
          shadow-[6px_6px_12px_#cfd8d3,-6px_-6px_12px_#ffffff]
          hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]
            hover:bg-[#eaf0ec]
  hover:text-emerald-700

          dark:bg-[#0f172a] dark:text-emerald-400
          dark:shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1f2933]
          dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

          transition-all
        "
      >
        Add Product
      </Button>
    </div>
    </div>
    
  );
}
