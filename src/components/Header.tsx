import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-md border-b border-border/20"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-foreground">Into</span>
            <span className="text-primary">The</span>
            <span className="text-foreground">Wild</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#explore" className="text-foreground/80 hover:text-primary transition-colors">
            Explore
          </a>
          <a href="#discover" className="text-foreground/80 hover:text-primary transition-colors">
            Discover
          </a>
          <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </motion.header>
  );
};
