import useCart from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const items = useCart((state) => state.items);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQty = useCart((state) => state.increaseQty);
  const decreaseQty = useCart((state) => state.decreaseQty);
  const clearCart = useCart((state) => state.clearCart);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-2xl font-semibold mb-2">🛒 Your cart is empty</h2>
        <p className="text-gray-500">Add some plants to see them here</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-10 space-y-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="
    flex items-center justify-between gap-6
    p-4 rounded-2xl
    w-full

    bg-[#eaf0ec]
    shadow-[8px_8px_16px_#cfd8d3,-8px_-8px_16px_#ffffff]

    dark:bg-[#0f172a]
    dark:shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1f2933]
  "
        >
          {/* Left */}
          <div className="flex items-center gap-4">
            <img
              src={`http://localhost:8083/${item.imageUrl}`}
              alt={item.name}
              className="h-16 w-16 rounded-lg object-cover"
            />

            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                ₹{item.price} × {item.quantity}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 mt-2">
                <Button
                  size="icon"
                  disabled={item.quantity === 1}
                  onClick={() => decreaseQty(item.id)}
                  className="h-8 w-8"
                >
                  <Minus size={14} />
                </Button>

                <span className="min-w-[24px] text-center font-semibold">
                  {item.quantity}
                </span>

                <Button
                  size="icon"
                  onClick={() => increaseQty(item.id)}
                  className="h-8 w-8"
                >
                  <Plus size={14} />
                </Button>
              </div>
            </div>
          </div>

          {/* Remove */}
          <Button
            size="icon"
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            <Trash2 size={18} />
          </Button>
        </div>
      ))}

      {/* Summary */}
      <div className="flex justify-between items-center pt-4 border-t">
        <h2 className="text-lg font-semibold">
          Total: ₹ {totalPrice}
        </h2>

        <Button
          onClick={clearCart}
          className="bg-red-500 text-white"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
