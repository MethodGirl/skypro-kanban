import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/auth/AuthContextProvider.jsx";
import { TaskContextProvider } from "./context/task/TaskContextProvider.jsx";
import { ThemeContextProvider } from "./context/theme/ThemeContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <TaskContextProvider>
            <App />
          </TaskContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
