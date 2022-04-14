import { useState } from "react";
import {Todo} from "./Todo"
function TodoItem({addItem}){
    const [item,setItem]=useState("")

    const getData=(text)=>{
        setItem(text)
    }


    return (
        <Todo getData={getData} addItem={addItem(item)}/>
    )

}
export {TodoItem}