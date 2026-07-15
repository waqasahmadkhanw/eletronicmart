import { Moon, Sun } from "lucide-react";

import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? "Light Mode" : "Dark Mode"}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-800
        text-gray-700 dark:text-yellow-400
        transition-all duration-200
        hover:scale-105
        hover:bg-gray-100 dark:hover:bg-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;