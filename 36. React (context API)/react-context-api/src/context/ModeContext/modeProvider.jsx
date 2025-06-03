import { useState } from "react";
import ModeContext from "./modeContext";

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => {
      return prevMode === "light" ? "dark" : "light";
    });
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
