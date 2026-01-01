import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router";

export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-gray-800">

      {/* Neumorphic overlay */}
      <div className="min-h-screen bg-background/70 backdrop-blur-sm">

        {/* HERO */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              max-w-3xl
              p-10 rounded-3xl
              bg-background/80 backdrop-blur-xl
              shadow-[12px_12px_24px_rgba(0,0,0,0.25),-12px_-12px_24px_rgba(255,255,255,0.08)]
              dark:shadow-[12px_12px_24px_#020617,-12px_-12px_24px_rgba(255,255,255,0.06)]
            "
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground">
              Bring Nature <span className="text-green-500">Home</span> 🌿
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Discover healthy, hand-picked plants that purify your space and
              turn every corner into a living sanctuary.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4 flex-wrap">
              <NavLink to="/login">
                <Button
                  className="
                    px-8 rounded-full font-semibold
                    bg-green-500 text-white
                    shadow-[6px_6px_12px_rgba(0,0,0,0.35),-6px_-6px_12px_rgba(255,255,255,0.15)]
                    hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.2)]
                    transition-all
                  "
                >
                  Shop Plants
                </Button>
              </NavLink>

              <Button
                variant="outline"
                className="
                  px-8 rounded-full
                  bg-background/70
                  border border-white/10
                  text-foreground
                  shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.08)]
                  hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.12)]
                  transition-all
                "
              >
                Explore Collections
              </Button>
            </div>
          </motion.div>
        </section>

        {/* STATS / FEATURES */}
        <section className="container mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
          {[
            "Fresh & Healthy Plants",
            "Eco-Friendly Packaging",
            "Fast & Safe Delivery",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className="
                  rounded-2xl
                  bg-background/80 backdrop-blur-lg
                  border border-white/10
                  shadow-[8px_8px_16px_rgba(0,0,0,0.25),-8px_-8px_16px_rgba(255,255,255,0.08)]
                  hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.35),inset_-4px_-4px_8px_rgba(255,255,255,0.12)]
                  transition-all
                "
              >
                <CardContent className="p-8 text-center">
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
