import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}