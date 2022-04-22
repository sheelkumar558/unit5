
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import { Navbar } from "./components/Nabar";
import { Body } from "./components/Body";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "dark" ? "#fad6d7" : "#1F1D36",
        height: "100vh",
      }}
    >
      <Navbar />
      <Body />
    </div>
  );
}

export { App };
