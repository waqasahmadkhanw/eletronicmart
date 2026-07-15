import { useEffect } from "react";

import { useTheme } from "../hooks/useTheme";

const ThemeProvider = ({ children }) => {
  const { mode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      mode
    );
  }, [mode]);

  return children;
};

export default ThemeProvider;