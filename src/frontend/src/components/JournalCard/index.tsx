import "./JournalCard.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { registerEmotion } from "@/services/api";

interface JournalCardProps {
  selectedMood: string | null;
}

const JournalCard = ({ selectedMood }: JournalCardProps) => {
  const [text, setText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!text.trim()) {
      toast.error("Escreva algo antes de salvar.");
      return;
    }

    if (!selectedMood) {
      toast.error("Selecione uma emoção antes de salvar.");
      return;
    }

    setIsSaving(true);
    try {
      await registerEmotion(selectedMood, text.trim());
      toast.success("Reflexão salva com sucesso!");
      setText("");
    } catch (error: any) {
      toast.error(error.message || "Erro ao salvar reflexão.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="journal-card journal-card-stack"
    >
      <h3 className="journal-heading">Diário</h3>
      <textarea
        placeholder="Escreva como está indo seu dia..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="journal-textarea"
      />
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <button
          onClick={handleSave}
          className="journal-btn journal-btn-primary"
          disabled={isSaving}
        >
          {isSaving ? "Salvando..." : "Salvar Reflexão"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default JournalCard;
