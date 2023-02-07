 import React, { useContext } from "react";

import List from "../../../components/List/List";
import ListItem from "../../../components/ListItem/ListItem";
import TodoContext from "../../../context/TodoContext";

export default function ToDoList(){
    const {data, updateToDo, deleteToDo} = useContext(TodoContext);

    console.log(data);

    return (
        
        <List>
            {
                data.map(
                    (item , index)=>{
                        return (
                            <ListItem
                                onChange={(e)=>{
                                    updateToDo(index,e.target.value);
                                }}
                                onDelete={(e)=>{
                                    deleteToDo(index);
                                }}
                                key={item.id}
                                value={item.value}
                            >
                            </ListItem>
                        )
                    }
                )
            }
        </List>
        
    )
} 