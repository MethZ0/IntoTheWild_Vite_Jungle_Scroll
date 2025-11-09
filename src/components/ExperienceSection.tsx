import { motion } from "framer-motion";
import { ParallaxLayer } from "./ParallaxLayer";

const experiences = [
  {
    title: "Dawn Awakening",
    description: "Witness the jungle come alive as the first rays of sunlight pierce through the canopy, illuminating a world of wonder.",
    time: "5:00 AM - 7:00 AM"
  },
  {
    title: "Midday Exploration",
    description: "Navigate through dense vegetation and discover hidden clearings where sunlight creates magical patterns on the forest floor.",
    time: "10:00 AM - 2:00 PM"
  },
  {
    title: "Twilight Mystery",
    description: "As day turns to night, experience the transformation as nocturnal creatures begin their symphony under the fading light.",
    time: "6:00 PM - 8:00 PM"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20">
      <ParallaxLayer speed={0.7} className="w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through time, from dawn to dusk
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-8 border border-border/40 hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                <h3 className="text-3xl font-semibold text-foreground">
                  {exp.title}
                </h3>
                <span className="text-primary font-medium">{exp.time}</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ParallaxLayer>
    </section>
  );
};
