import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

// Sample wildlife images - replace with your actual images
const wildlifeImages: CarouselImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&q=80",
    title: "Majestic Tiger",
    description: "Bengal tiger in its natural habitat",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200&q=80",
    title: "Tropical Parrot",
    description: "Vibrant macaw in the rainforest canopy",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1551857524-8303f7e85845?w=1200&q=80",
    title: "Wild Elephant",
    description: "African elephant roaming the savanna",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80",
    title: "Jungle Monkey",
    description: "Playful monkey swinging through the trees",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&q=80",
    title: "Colorful Butterfly",
    description: "Exotic butterfly on tropical flowers",
  },
];

export const WildlifeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % wildlifeImages.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + wildlifeImages.length) % wildlifeImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-forest-deep/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Wildlife Gallery
          </h2>
          <p className="text-xl text-mist">
            Explore the beauty of nature's creatures
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div 
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                }}
                className="absolute inset-0"
              >
                <img
                  src={wildlifeImages[currentIndex].url}
                  alt={wildlifeImages[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {wildlifeImages[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {wildlifeImages[currentIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {wildlifeImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-primary scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 border-4 border-primary rounded-lg"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {wildlifeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};
