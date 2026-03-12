import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const JournalCard = () => {
  const [text, setText] = useState("");

  const handleSave = () => {
    if (!text.trim()) return;
    toast.success("Reflection saved!");
    setText("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card rounded-2xl card-shadow p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">Journal</h3>
      <Textarea
        placeholder="Write how your day is going..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-[120px] rounded-xl resize-none"
      />
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button onClick={handleSave} className="rounded-xl gradient-primary text-primary-foreground">
          Save Reflection
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default JournalCard;
