import { useState } from "react"

export function Todo({getTodos}){
    const [text,setText]=useState("")


    return (
        <div>
            <input onChange={(e)=>setText(e.target.value)}
            onKeyPress={(event)=>{
                if(event.key==="Enter"){
                    getTodos(text)
                }
            }

            }

            type="text" placeholder="Add Todos"/>
        </div>
    )
}