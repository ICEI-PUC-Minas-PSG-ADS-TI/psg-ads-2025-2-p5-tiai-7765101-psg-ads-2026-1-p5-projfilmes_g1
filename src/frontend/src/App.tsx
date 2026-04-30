import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./contexts/theme-context";
import AuthLayout from "./pages/AuthLayout";
import AuthenticatedLayout from "./pages/AuthenticatedLayout";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { tokenExpired } from "./services/auth";
import "react-toastify/dist/ReactToastify.css";
import Timeline from "./pages/Timeline";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      if (await tokenExpired()) {
        setLoggedIn(false);
        localStorage.removeItem('userToken');
      }
      else {
        setLoggedIn(true);
      }
    };
    checkToken();
  }, []);

  return (
    <ThemeProvider>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn ? <AuthenticatedLayout /> : <AuthLayout />}>
            {loggedIn ? (
              <>
                <Route index element={<Home />} />
                <Route path="timeline" element={<Timeline />} />
                <Route path="register" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route index element={<LoginForm onLogin={() => setLoggedIn(true)} />} />
                <Route path="register" element={<RegisterForm />} />
                <Route path="timeline" element={<Navigate to="/" replace />} />
              </>
            )}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
