import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MoodSelector from "@/components/MoodSelector";
import JournalCard from "@/components/JournalCard";
import InsightsCard from "@/components/InsightsCard";
import CalmNowCard from "@/components/CalmNowCard";
import { Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-foreground"
        >
          Good to see you 👋
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          <MoodSelector />
          <JournalCard />
        </div>

        <InsightsCard />

        <div className="grid md:grid-cols-2 gap-6">
          <CalmNowCard />

          {/* Support info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-2xl card-shadow p-6 space-y-3"
          >
            <h3 className="text-lg font-semibold text-foreground">Need help?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you are going through a difficult moment, you can seek help.
            </p>
            <div className="gradient-soft rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                CVV – Centro de Valorização da Vida
              </p>
              <p className="text-sm text-primary font-medium flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> 188
              </p>
              <p className="text-xs text-muted-foreground">Available 24/7 in Brazil</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;
