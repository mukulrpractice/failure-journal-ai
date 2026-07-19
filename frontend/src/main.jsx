import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2500,
            style: {
              borderRadius: "12px",
              background: "#1e293b",
              color: "#fff",
            },
          }}
        />

        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);