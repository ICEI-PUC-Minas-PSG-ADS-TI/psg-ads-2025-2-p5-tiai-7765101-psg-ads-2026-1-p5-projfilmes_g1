import { motion } from "framer-motion";
import LoginForm from "@/components/LoginForm";
import loginIllustration from "@/assets/login-illustration.png";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left — Illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 gradient-soft items-center justify-center p-12"
      >
        <motion.img
          src={loginIllustration}
          alt="Calm meditation illustration"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="max-w-md w-full"
        />
      </motion.div>

      {/* Right — Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default Login;
