export interface Plant {
  id: number;
  name: string;
  tag: string;
  imageUrl?: string;
  category?: string;
  price: number;      // ✅ number
  quantity?: number;   // ✅ number
}


export interface PlantForm {
  name: string;
  tag: string;
  category?: string;
  imageUrl?: string;
  price: string;       // ✅ string
  quantity: string;    // ✅ string
}


