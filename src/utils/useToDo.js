import React, {useEffect, useState, useCallback} from "react";
export default function useToDO() {
    const [toDo, setToDo] = useState([]);

    useEffect(() => {
        let newToDO = [...toDo];
        newToDO.push({ value: "資料一", id: Date.now() });
        setToDo(newToDO);
        return () => {
        };
    }, []);

    // create
    const addToDo = useCallback(
        (value) => {
            const toDoCopy = [...toDo];
            toDoCopy.push({ value: value, id: Date.now() });
            setToDo(toDoCopy);
        },
        [toDo]
    );

    // update
    const updateToDo = useCallback(
        (index, value) => {
            const toDoCopy = [...toDo];
            toDoCopy[index].value = value;
            setToDo(toDoCopy);
        },
        [toDo]
    );

    // delete
    const deleteToDo = useCallback(
        (index) => {
            const toDoCopy = [...toDo];
            toDoCopy.splice(index, 1);
            setToDo(toDoCopy);
        },
        [toDo]
    );
    return {toDo , addToDo, updateToDo, deleteToDo};
}
