import React, { useContext, useState } from "react";
import TodoContext from "../../../context/TodoContext";

export default function AddToDo(){
    const {addToDo} = useContext(TodoContext);
    const [value, setValue] = useState("");
    return (
        <div>
            <input 
                type="text" 
                value={value} 
                onChange={(e)=>{
                    setValue(e.target.value)
                }}></input>
            <button onClick={(e)=>{
                addToDo(value);
            }}>新增</button>
        </div>
    )
}

