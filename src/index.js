import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const someElement = document.getElementById("boot")
const boot = createRoot(someElement);
boot.render(
    <StrictMode>
    <App />
    </StrictMode>
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
