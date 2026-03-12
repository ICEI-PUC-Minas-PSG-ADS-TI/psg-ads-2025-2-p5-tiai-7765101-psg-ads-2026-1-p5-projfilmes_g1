import { useState } from "react";
import { motion } from "framer-motion";

const moods = [
  { emoji: "😊", label: "Great" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😣", label: "Stressed" },
];

const MoodSelector = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl card-shadow p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">
        How are you feeling today?
      </h3>
      <div className="flex flex-wrap gap-3">
        {moods.map((mood) => (
          <motion.button
            key={mood.label}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(mood.label)}
            className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl border transition-colors ${
              selected === mood.label
                ? "border-primary bg-muted"
                : "border-border hover:border-primary/40"
            }`}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-xs font-medium text-muted-foreground">{mood.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default MoodSelector;
