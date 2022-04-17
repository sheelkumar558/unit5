import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Food } from "./components/Food";
import { Timer } from "./components/Timer";
import { Todos } from "./components/Todos";

function App() {
  const [show, setShow] = useState();

  return (

    <div className="">
      <Food />
      {/* < Timer /> */}
      {/* < Counter/> */}
      {/* {show ? <Counter /> :null}  */}
      {/* { show ? <Todos /> :null}
      <button onClick={()=>{
        setShow(!show);
      }}>Todos</button>
       {show ? "Hide" : "Show"}  */}
    </div>
  );
}

export default App;

// npm create vite
//go to react then react
//open project in code
// npm i
//npm run dev

//create-react-app myapp
// chenge react version to 17.0.2
// npm i
//npm i web-vitals
//npm start

//make "page" state
//use ?_Psge={page}& for getting the data
//use page as dependency Of effect
// inc/dec page on next/prev button click
