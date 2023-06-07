import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children, inital = "light" }) => {
  const [theme, setTheme] = useState(inital);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
