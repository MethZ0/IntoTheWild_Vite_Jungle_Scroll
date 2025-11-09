import { motion } from "framer-motion";
import { ParallaxLayer } from "./ParallaxLayer";

export const ContentSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <ParallaxLayer speed={0.8} className="w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-12 border border-border shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Journey Deeper
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            As you venture further into the wilderness, every step reveals new wonders. 
            The dense canopy above filters golden rays of sunlight, creating a mystical 
            atmosphere where nature's symphony fills the air.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From towering trees that have stood for centuries to the delicate flora 
            carpeting the forest floor, this is where life thrives in its purest form.
          </p>
        </motion.div>
      </ParallaxLayer>
    </section>
  );
};
