//import { add, mult } from "./calc";
import React from "react";
import "./index.css";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1 className="redtext">Hello React </h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
      width="400px"
      hight="400px"
    />
  </div>, //what : JSX
  document.getElementById("root")
);

// console.log(add(1, 3));

// console.log(mult(10, 3));

// //const root = document.getElementById("root");
// //const h1 = React.createElement("h1",{className:"redtext"},"hello react");
// const h1 = React.createElement("h1", {}, "Hello React");
// const div = React.createElement("div", {}, "Hello div");
// const img = React.createElement("img", {
//   width: "400px",
//   height: "400px",
//   src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
// });
// const toShow = true;
// const p = React.createElement(
//   "p", //what
//   { className: "redtext flex", id: "uniqID" },// attribut
//   h1,
//   "text",
//   div,
//   toShow ? img:null, //where // ternary
// );
// ReactDom.render(p, document.getElementById("root"));
// const h1 =document.createElement("h1");

// h1.innerText = "Hello WebPaC";
// //h1.classList.add("redtext")
// h1.setAttribute("class","redtext");
//root.appendChild(h1);

//cmd : npm install @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
