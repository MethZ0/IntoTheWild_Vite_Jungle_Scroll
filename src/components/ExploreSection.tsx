import { motion } from "framer-motion";
import { ParallaxLayer } from "./ParallaxLayer";
import { Leaf, TreePine, Droplets } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Ancient Trees",
    description: "Walk among giants that have stood for centuries, their canopies reaching toward the heavens."
  },
  {
    icon: Droplets,
    title: "Crystal Waters",
    description: "Discover hidden streams and waterfalls that flow through the heart of the wilderness."
  },
  {
    icon: Leaf,
    title: "Rich Biodiversity",
    description: "Experience an ecosystem teeming with life in its most vibrant and untouched form."
  }
];

export const ExploreSection = () => {
  return (
    <section id="explore" className="relative min-h-screen flex items-center justify-center py-20">
      <ParallaxLayer speed={0.6} className="w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Explore The Unknown
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every corner of the jungle holds secrets waiting to be discovered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border/40 hover:border-primary/40 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ParallaxLayer>
    </section>
  );
};
