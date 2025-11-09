import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-forest-deep/90 backdrop-blur-sm border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">Wild</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Embark on a journey into the untamed wilderness. Experience nature's 
              majesty and discover the wild within yourself.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#explore" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#discover" className="text-muted-foreground hover:text-primary transition-colors">
                  Journey
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/40 text-center text-muted-foreground"
        >
          <p>© 2024 Wild. All rights reserved. Embrace the wilderness.</p>
        </motion.div>
      </div>
    </footer>
  );
};
