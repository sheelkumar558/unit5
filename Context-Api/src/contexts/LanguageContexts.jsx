import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangContextProvider = ({ Children }) => {
  const [lang, setLang] = useState("en");
  const handleLang = () => {
    setLang(lang === "en" ? "Cart" : "Thaila");
  };
  return (
    <LangContext.Provider value={{ lang, handleLang }}>
      {Children}
    </LangContext.Provider>
  );
};
