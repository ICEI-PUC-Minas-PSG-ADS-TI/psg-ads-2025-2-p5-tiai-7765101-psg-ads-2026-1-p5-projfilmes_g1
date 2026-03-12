import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-card rounded-2xl card-shadow p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
          <p className="text-muted-foreground text-sm">
            Track your emotions and take care of your mind.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl"
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full rounded-xl gradient-primary text-primary-foreground font-medium h-11">
              Login
            </Button>
          </motion.div>
        </form>

        <div className="flex items-center justify-between text-sm">
          <button className="text-primary hover:underline font-medium">Create account</button>
          <button className="text-muted-foreground hover:text-foreground">Forgot password?</button>
        </div>

        <p className="text-xs text-muted-foreground text-center leading-relaxed pt-2 border-t border-border">
          This platform offers emotional support tools and does not replace professional therapy.
        </p>
      </div>
    </motion.div>
  );
};

export default LoginForm;
