import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

const slides = [
  {
    title: "Bring Nature Home",
    subtitle: "Beautiful plants for modern living",
    image: "/images/jackie-dilorenzo-RyLsRzy9jIA-unsplash.jpg",
  },
  {
    title: "Green Your Space",
    subtitle: "Fresh, healthy & sustainable",
    image: "/images/jackie-dilorenzo-RyLsRzy9jIA-unsplash.jpg",
  },
  {
    title: "Grow With Love",
    subtitle: "Plants that make you smile",
    image: "/images/jackie-dilorenzo-RyLsRzy9jIA-unsplash.jpg",
  },
];

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="w-full"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card
              className="
                relative h-[380px] overflow-hidden 
                bg-[#eaf0ec]
                shadow-[10px_10px_20px_#cfd8d3,-10px_-10px_20px_#ffffff]
                dark:bg-[#0f172a]
    dark:shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1f2933]
              "
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Text */}
              <div className="relative z-10 flex h-full items-center px-12">
                <div
                  className="
                    rounded-3xl px-8 py-6
                    bg-[#eaf0ec]/90 backdrop-blur
                    shadow-[6px_6px_12px_#cfd8d3,-6px_-6px_12px_#ffffff]

    dark:bg-[#0f172a]/90 dark:text-gray-200
    dark:shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1f2933]
                  "
                >
                  <h1 className="text-4xl font-bold text-black dark:text-white">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-700 dark:text-white mt-2">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
