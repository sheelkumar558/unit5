import { useState } from "react";



export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 1,
    notebooks: 1,
    pens: 1,
    inkpens:1
  });

const handelbook = (e) => {
    let updatedValue = {};
    updatedValue = {      
    books: e+inv.books,
 };
 if(e+inv.books<0){ return}
 setInv(inv => ({
         ...inv,
         ...updatedValue
       }));
    }


  const handelnote = (e) => {
      let updatedValue = {};
      updatedValue = {      
        notebooks: e+inv.notebooks,
   };
   if(e+inv.notebooks<0){ return}
   setInv(inv => ({
           ...inv,
           ...updatedValue
         }));
      }

  const handelinkpens = (e) => {
        let updatedValue = {};
        updatedValue = {      
          inkpens: e+inv.inkpens,
     };
     if(e+inv.inkpens<0){ return}
     setInv(inv => ({
             ...inv,
             ...updatedValue
           }));
        }    

    const handelpens = (e) => {
          let updatedValue = {};
          updatedValue = {      
            pens: e+inv.pens,
       };
       if(e+inv.pens<0){ return}
       setInv(inv => ({
               ...inv,
               ...updatedValue
             }));
          }
  
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => handelbook(1)}>+</button>
        <button className="circlularButton" onClick={() => handelbook(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"  onClick={() => handelnote(1)}>+</button>
        <button className="circlularButton"  onClick={() => handelnote(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"  onClick={() => handelpens(1)}>+</button>
        <button className="circlularButton"  onClick={() => handelpens(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"  onClick={() => handelinkpens(1)}>+</button>
        <button className="circlularButton"  onClick={() => handelinkpens(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.inkpens+inv.pens+inv.notebooks}
    </div>
  );
};