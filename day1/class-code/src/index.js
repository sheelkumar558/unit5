import {add,mult} from "./calc";

console.log(add(1,3));

console.log(mult(10,3));

const root = document.getElementById("root");

const h1 =document.createElement("h1");

h1.innerText = "Hello WebPaC";
//h1.classList.add("redtext")
h1.setAttribute("class","redtext");
root.appendChild(h1);