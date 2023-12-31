import { createContext, useState } from "react";

const ThemeContext = createContext(null);
const DARK_MODE = "DARK_MODE";
const STATE_DARK_MODE =
  window.localStorage?.getItem(DARK_MODE) === "true" ? true : false;

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(STATE_DARK_MODE);

  const data = { darkMode, setDarkMode, DARK_MODE };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
