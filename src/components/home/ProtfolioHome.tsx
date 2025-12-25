import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router";

export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-[url('/images/Plants2.png')] bg-cover bg-center">

      {/* Adaptive overlay */}
      <div className="min-h-screen bg-background/60 backdrop-brightness-50">

        {/* HERO */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground">
              Bring Nature <span className="text-green-500">Home</span> 🌿
            </h1>

            <p className="mt-6 text-lg text-foreground max-w-xl">
              Discover healthy, hand-picked plants that purify your space and
              turn every corner into a living sanctuary.
            </p>

            <div className="mt-10 flex gap-4">
            <NavLink to={'/login'}>
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
                Shop Plants
              </Button>
            </NavLink>
              
              <Button variant="outline" className="rounded-full px-6">
                Explore Collections
              </Button>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="container mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
          {["Fresh & Healthy Plants",
            "Eco-Friendly Packaging",
            "Fast & Safe Delivery"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/70 border border-border backdrop-blur-md rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <p className="text-foreground font-medium">
                      {item}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </section>

      </div>
    </div>
  );
}
