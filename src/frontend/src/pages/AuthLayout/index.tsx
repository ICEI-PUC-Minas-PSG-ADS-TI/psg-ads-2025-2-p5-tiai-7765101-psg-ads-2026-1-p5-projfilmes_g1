import "./AuthLayout.css";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import loginIllustration from "@/assets/login-illustration.png";

const AuthLayout = () => {
  return (
    <div className="login-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="login-illustration"
      >
        <motion.img
          src={loginIllustration}
          alt="Calm meditation illustration"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="login-form-side">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;