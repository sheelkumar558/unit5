import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { LangContextProvider } from "./contexts/LanguageContexts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      {/* <LangContextProvider> */}
        <App />
      {/* </LangContextProvider> */}
    </CartContextProvider>
  </React.StrictMode>
);
