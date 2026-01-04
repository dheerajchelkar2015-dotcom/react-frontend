export interface Product {
  id: number;
  name: string;
  tag: string;
  imageUrl?: string;
  price: number;
  quantity?: number;

  category: {
    id: number;
    name: string;
  };
}

export interface ProductForm {
  name: string;
  tag: string;
  categoryId: number;
  price: string;
  quantity: string;
}
