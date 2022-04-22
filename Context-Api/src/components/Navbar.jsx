import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Navbar = ()=>{
    const {cart }= useContext(CartContext);
   // const {lang} = useContext(LangContext);
    return ( 
        <nav style={{
            display:"flex",
            justifyContent:"end",
            height:"30px",
            border:"1px solid red",
            textAlign:"center",
            margin:"10px",
            padding:"5px",
            fontSize:"25px",
            
        }}>
            Cort : {cart}
        </nav>
    );
}