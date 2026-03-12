import { motion } from "framer-motion";
import { User } from "lucide-react";

const navItems = ["Home", "My Mood", "Journal", "Insights", "Calm Now"];

interface NavbarProps {
  active?: string;
}

const Navbar = ({ active = "Home" }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card card-shadow sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-clip-text text-transparent gradient-primary">
          MindCare
        </span>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === item
                  ? "text-primary bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
          <User className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
