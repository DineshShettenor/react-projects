import React from "react";
import "./styles.css";
import { useLocalStorage } from "./useLocalStorage";

export const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="light-dark-mode-container" data-theme={theme}>
      <h1>Hello World</h1>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
};
