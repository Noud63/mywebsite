import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Footer from "./components/intro/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full px-[20px] max-xsm:px-0">
      <App />
    </div>
    <Footer />
  </StrictMode>,
);
