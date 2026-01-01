import type CartItem from "./CartItem";

export default interface CheckoutRequest {
  userEmail: string;
  totalAmount: number;
  items: CartItem[];
}
