import { motion } from "framer-motion";
import { ParallaxLayer } from "./ParallaxLayer";

export const DiscoverSection = () => {
  return (
    <section id="discover" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ParallaxLayer speed={0.9}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Discover Your Path
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The jungle is more than just a destination—it's a journey of self-discovery. 
                With each step deeper into the wilderness, you shed the noise of civilization 
                and reconnect with something primal and pure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Listen to the rhythm of rustling leaves, the distant calls of exotic birds, 
                and the gentle whisper of the wind through ancient branches. This is where 
                adventure truly begins.
              </p>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-12 border border-border/40"
            >
              <blockquote className="text-2xl md:text-3xl font-light text-foreground italic">
                "In every walk with nature, one receives far more than he seeks."
              </blockquote>
              <p className="text-muted-foreground mt-4 text-lg">— John Muir</p>
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
};
