import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-muted-foreground">
        Your cart is empty 🌱
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      {cart.map((item) => (
        <Card key={item.id} className="rounded-xl">
          <CardContent className="flex items-center gap-4 p-4">
            <img
              src={item.image}
              className="h-20 w-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                ₹{item.price}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 mt-2">
                <Button size="sm" variant="outline" onClick={() => decreaseQty(item.id)}>
                  −
                </Button>
                <span className="font-medium">{item.quantity}</span>
                <Button size="sm" variant="outline" onClick={() => increaseQty(item.id)}>
                  +
                </Button>
              </div>
            </div>

            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-between items-center pt-6 border-t">
        <span className="text-lg font-semibold">Total: ₹{total}</span>
        <Button size="lg" className="rounded-full">
          Checkout
        </Button>
      </div>
    </div>
  );
}
