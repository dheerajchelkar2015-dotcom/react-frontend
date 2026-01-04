import { useEffect, useState } from "react";
import useCategoryStore from "@/store/categoryStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoryPage() {
  const { categories, fetchCategories, addCategory, loading } =
    useCategoryStore();

  const [name, setName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleAdd = async () => {
    if (!name.trim()) return;
    await addCategory({ name });
    setName("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Categories</h1>

      {/* Add Category */}
      <div className="flex gap-2">
        <Input
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>

      {/* List Categories */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-2">
          {categories.map((c) => (
            <Card key={c.id}>
              <CardContent className="p-3">
                {c.name}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
