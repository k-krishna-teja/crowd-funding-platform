import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const container = document.getElementById("root");
const root = createRoot(container); // Ensure createRoot is used for React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
