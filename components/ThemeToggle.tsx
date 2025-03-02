"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      className="p-2 bg-gray-800 rounded dark:[box-shadow:0_0_0_2px_#4ade80,0_0_0_4px_#fff,0_0_0_6px_#4ade80] [box-shadow:0_0_0_2px_#6366f1,0_0_0_4px_#fff,0_0_0_6px_#6366f1] hover:bg-gray-700 transition-colors"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
