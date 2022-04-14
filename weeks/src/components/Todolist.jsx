import { useState } from "react";
import { Todo } from "./Todo";
import '../App.css';
export function TodoList(){

    const [todo, setTodos]=useState(["Bread","Water","Egg","Milk"])

    const getTodos=(text)=>{
        setTodos([...todo,text])
    }

    return (
        <div>
            <Todo getTodos={getTodos}/>
            {todo.map(e=>
            <div 
            className="green flex">
            <label>
            <input type="checkbox"/>{e}
            </label>
            <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            )}
            <button>Show completed To-Dos</button>
        </div>
    )

}