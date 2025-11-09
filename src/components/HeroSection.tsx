import { motion } from "framer-motion";
import { ParallaxLayer } from "./ParallaxLayer";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Foreground parallax layer - moves faster */}
      <ParallaxLayer speed={1.2} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-forest-deep/40 to-transparent" />
      </ParallaxLayer>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-foreground tracking-tight mb-6">
            Into The Wild
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-mist font-light tracking-wide"
          >
            Discover the untamed beauty of nature
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>

      {/* Background parallax layer - moves slower */}
      <ParallaxLayer speed={0.3} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background/30 to-transparent" />
      </ParallaxLayer>
    </section>
  );
};
