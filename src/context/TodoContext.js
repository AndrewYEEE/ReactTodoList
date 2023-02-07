import React, {createContext} from "react";

export const initToDo = {
    data:[
    ],
    updateToDo: () => {},
    addToDo: () => {},
    deleteToDo: () => {},
}


export default createContext(initToDo);


