import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const plants = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        price: 899,
        tag: "Indoor",
        image: "/images/1.png",
    },
    {
        id: 2,
        name: "Snake Plant",
        price: 499,
        tag: "Low Light",
        image: "/images/2.png",
    },
    {
        id: 3,
        name: "Peace Lily",
        price: 699,
        tag: "Air Purifier",
        image: "/images/3.png",
    },
    {
        id: 4,
        name: "Aloe Vera",
        price: 299,
        tag: "Medicinal",
        image: "/images/4.png",
    },
];

export default function UserHome() {

    const { addToCart } = useCart();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-green-100 dark:from-background dark:to-green-950">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Buy Fresh <span className="text-green-600">Plants</span> for Your Home
                </motion.h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    Discover indoor & outdoor plants that bring life, freshness, and positivity.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" className="rounded-full">Shop Now</Button>
                    <Button size="lg" variant="outline" className="rounded-full">Explore Categories</Button>
                </div>
            </section>

            {/* Products */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <h2 className="text-2xl font-semibold mb-8">Popular Plants</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plants.map((plant) => (
                        <motion.div
                            key={plant.id}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <Card className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-md">

                                {/* Image */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Tag */}
                                    <Badge
                                        variant="secondary"
                                        className="absolute top-4 left-4 text-xs font-medium"
                                    >
                                        {plant.tag}
                                    </Badge>
                                </div>

                                {/* Content */}
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-base font-medium tracking-tight">
                                        {plant.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        Indoor plant
                                    </p>

                                    <div className="flex items-center justify-between pt-3">
                                        <span className="text-base font-semibold text-green-600">
                                            ₹{plant.price}
                                        </span>

                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="rounded-full px-4 text-green-600 hover:bg-green-200 dark:bg-green-100 dark:hover:bg-green-950"
                                            onClick={() =>
                                                addToCart({
                                                    id: plant.id,
                                                    name: plant.name,
                                                    price: plant.price,
                                                    image: plant.image,
                                                })
                                            }
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>


            </section>
        </div>
    );
}
