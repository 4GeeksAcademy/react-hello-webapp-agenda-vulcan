import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context.jsx";

// Renderizamos la app dentro del ContextProvider
const root = createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);