import React, { useEffect, useRef,useState } from "react";
import "./App.css";
import { Form } from "./Components/Form";
import { StopWatch } from "./Components/StopWatch";

function App() {
//   const [count, setCount] = useState(0);
//  const countRf =useRef(null);
//  const divRef = useRef(null);

//   useEffect(()=>{
//    countRf.current= setInterval(()=>{
//      setCount((p)=>p+1);
//     },1000);
//   },[]);
// const startInt=()=>{
//   countRf.current= setInterval(()=>{
//     setCount((p)=>p+1);
//    },1000);
// };

//   const ref = useRef(10);

// console.log("x:",ref);
  return <div className="App">
    {/* <Form /> */}
    <StopWatch />
    {/* <h1 ref={divRef}>Counter:{count}</h1>
    <button onClick={()=>{
      clearInterval(countRf.current);
    }}>pause</button>

<button onClick={()=>{
      startInt();
    }}>start</button>
     <button onClick={()=>{
       clearInterval(countRf.current);
       setCount(0);
    }}>reset</button> */}
  </div>;
}

export default App;


{/* <h1>countter:{count}</h1>
    <button onClick={()=>{
      setCount(count+1);
    }}>cheng count</button>
    <button onClick={()=>{
      ref.current+= 1;
      console.log("x",ref)
    }}>cheng x</button> */}