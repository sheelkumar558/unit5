import styled from "styled-components";
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  background: ${(props) => (props.Primary ? "#40DFEF" : " ")};
  border: ${(props) => (props.Primary ? "none" : "1px solid black") };
  color:${(props) => (props.Primary ? "#f2f9fa": "")};
  
  background: ${(props) => (props.Default ? "white" : " ")};
  border: ${(props) => (props.Default? "1px solid black" : "") };
  background: ${(props) => (props.Dashed ? "white" : " ")};
  border: ${(props) => (props.Dashed? "1px dashed black" : "") };
  background: ${(props) => (props.Text ? "white" : " ")};
  border: ${(props) => (props.Text? "none" : "") };
  background: ${(props) => (props.Link ? "white" : " ")};
  border: ${(props) => (props.Link? "none" : "") };
  color:${(props) => (props.Link ? "#19bfd4": "")};
  
   
`;

export {Button}









// import { Children } from "react";
// import styled from "styled-components";
// import "./button.css";

// const Button = styled.button`
//   background-color: transparent;
//   border: none;
//   border-radius: 4px;
//   padding: 10px;
//   padding-top: 8px;
//   text-align: center;
//   color: ${(props) => (props.theme === "light" ? "#f6f54d" : "#143f6b")};
//   background: ${(props) => (props.theme === "light" ? "#143f6b" : "#f6f54d")};
//   cursor: pointer;
//   margin: 5px;
//   &:hover {
//     box-shadow: #02f523 0 3px 8px;
//   }
// `;

// export { Button };

// // export const Button = ({ Children, onClick }) => {
// //   return (
// //     <button  className="btn" onClick={onClick}>
// //      mm: {Children}
// //     </button>
// //   );
// // };
