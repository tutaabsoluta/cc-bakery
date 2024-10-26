import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BakeryApp } from "./BakeryApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BakeryApp />
    </BrowserRouter>
  </StrictMode>
);
