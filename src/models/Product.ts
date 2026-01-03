export interface Product {
  id: number;
  name: string;
  tag: string;
  imageUrl?: string;
  category: string;
  price: number;      
  quantity?: number;  
}


export interface ProductForm {
  name: string;
  tag: string;
  category: string;
  imageUrl?: string;
  price: string;     
  quantity: string;  
}


