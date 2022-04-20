// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Button } from "antd";
// import { Flex } from "./components/Flex";

import { Button } from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button Primary>Primary Button</Button>
      <Button Default>Default Button</Button>
      <Button Dashed>Dashed Button</Button>
      <Button Text>Text Button</Button>
      <Button Link>Link Button</Button>
    </div>
  );

  //   const [theme, setTheme] = useState("dark");
  //   return (
  //     <div className="App">
  //       <h1>Them:{theme}</h1>
  //      {/* <Button type="primery">Antd</Button>
  //       <Button
  //          type="default"
  //         theme={theme}
  //         onClick={() => {
  //           alert("click me");
  //         }}
  //       >
  //         Click Me
  //       </Button>
  //       <Button

  //            theme={theme}
  //         onClick={() => {
  //           setTheme(theme);
  //         }}
  //       >
  //         Chenge theme
  //       </Button> */}
  //       <Button  props="theme">Theme</Button>
  //       <Button  >login</Button>
  //       {/* <Flex>
  //         <div>one</div>
  //         <div>two</div>
  //         <div>three</div>
  //       </Flex> */}
  //     </div>
  //   );
}

export default App;
