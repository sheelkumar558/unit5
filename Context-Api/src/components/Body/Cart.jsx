import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { LangContext } from "../../contexts/languageContexts";
export const Cart =()=>{
    //const { handleLang}= useContext(LangContext);
    const {hadleChenge} = useContext(CartContext);
    return <div style={{
        width:"200px",
        height: "300px",
        padding:"10px",
        background:"teal",

    }}>
    <button onClick={()=>{
       hadleChenge(1);
     
    }}>Add To Card</button>
    </div>
}