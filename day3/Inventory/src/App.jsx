import React, { useState } from "react";
import "./App.css";
import { Inventory } from "./components/Inventory";




function App() {

  const [count,SetCount]=useState(0);
 
  const counthendeller=(value)=>{
    // if(count<0){
    //   return;
    // }
    SetCount(count+value);
  }

  return (
    <div className="App">
     
      <Inventory />
     
    </div>
  );
}

export default App;