//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import {Todo} from "./components/Todo";
function App() {
  
    
  return( <div className="App">
       <Todo />     
    </div>
    );
}


export default App;
// const [message,setMessage] =useState("");
// const getData = (data)=>{
//   console.log("Got data from child:", data);
// {/* <button>Add</button>
            // <First getData={getData}/>
            // <Second message={message}/> */}

// function First({getData}){
//  const data = "hello c1";

//   return(
//     <div>first child
//       <button onClick={()=>{
//           getData(data);
//       }}>send data</button>
//     </div>
//   );
// }


// function Second({message}){
//   console.log("Got data from sibiling" , message);
//   return(
//     <div>Second child ,{message}</div>
//   );
// }
// 

//const ball=50;
//Over: {`${Math.floor(ball/6)}.${ball%6}`}

// function App(data){
//   const cb=(value)=>{
//     console.log("hello",value);
//   }
//   return First(cb);
// }

// function First(cb){
//   const data = "text";
//   cb(data);
// }
