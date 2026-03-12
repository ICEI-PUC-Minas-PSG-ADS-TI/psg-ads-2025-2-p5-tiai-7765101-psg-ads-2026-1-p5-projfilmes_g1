import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wind } from "lucide-react";

const CalmNowCard = () => {
  const [breathing, setBreathing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card rounded-2xl card-shadow p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <Wind className="w-5 h-5 text-primary" />
        Need a moment to breathe?
      </h3>

      <AnimatePresence mode="wait">
        {breathing ? (
          <motion.div
            key="breathing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 py-6"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 rounded-full gradient-primary opacity-20"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute w-20 h-20 rounded-full gradient-primary opacity-40"
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute text-sm font-medium text-primary"
              >
                Breathe
              </motion.p>
            </div>
            <Button variant="outline" onClick={() => setBreathing(false)} className="rounded-xl">
              Stop
            </Button>
          </motion.div>
        ) : (
          <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button onClick={() => setBreathing(true)} className="rounded-xl gradient-primary text-primary-foreground">
                Start Breathing Exercise
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CalmNowCard;
