import { createContext } from "react";

export const FontContext = createContext({
  font: "",
  setFont: (font) => {},
});
