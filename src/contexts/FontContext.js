import { createContext, useState } from "react";

export const FontContext = createContext(null);

export const FontContextProvider = ({ children, inital = "sans-serif" }) => {
  const [font, setFont] = useState(inital);
  return (
    <FontContext.Provider value={[font, setFont]}>
      <div className={`${font}`}>{children}</div>
    </FontContext.Provider>
  );
};
