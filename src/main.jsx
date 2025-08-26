import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HeroUIProvider } from "@heroui/react";
import CounterContextpovider from "./Contexts/CounterContext.jsx";
import AuthContextProvider from "./Contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <CounterContextpovider>
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </CounterContextpovider>
    </HeroUIProvider>
  </StrictMode>
);
