import { useState } from "react";
import "./App.css";
//import { Category } from "./components/Category";

function App() {
  const [counter, setCounter] = useState(0);

  // const handleAdd = () => {
  //   // if (counter >= 10) {
  //   //   return;
  //   // }
  //   setCounter(counter + 1);
  // };

  // const handleSub = () => {
  //   // if (counter <= 0) {
  //   //   return;
  //   // }
  //   setCounter(counter - 1);
  // };
  const handleDuble = () => {
    setCounter(counter * 2);
  };

  const handleChange = (value) => {
    
    setCounter(counter + value);
  };

  
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Sub 1
      </button>
      <button onClick={handleDuble}>double</button>
      <div>
        Color -- <button className={`${counter%2===0 ? "even" : "odd"}`}>{counter}</button> 
        </div>
    </div>
  );
}

export default App;

// State Props and conditional rendering

//  const arr = [1,2,3,4];
// {arr.map((e)=>(
// <li className={`${e%2===0 ? "circle" : "square"}`}>{e}</li>
// ))}

//   <div className="nav">
//   {nabvar.map((e)=> <Category image={e.image} lebel={e.title} />)}
// </div>
// const nabvar = [
//   {
//     image:
//       "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//     title: "Top Offers",
//   },
//   {
//     image:
//       "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
//     title: "Grocery",
//   },
//   {
//     image:
//       "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//     title: "Top Offers",
//   },
//   {
//     image:
//       "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
//     title: "Grocery",
//   },
// ];
// return (

//   //Props
//   <div className="nav">
//     <Category
//       image={
//         "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
//       }
//       lebel={"Grocery"}
//     />
//      <Category
//       image={
//         "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
//       }
//       lebel={"Grocery"}
//     />
//      <Category
//       image={
//         "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
//       }
//       lebel={"Grocery"}
//     />
//   </div>
// );
