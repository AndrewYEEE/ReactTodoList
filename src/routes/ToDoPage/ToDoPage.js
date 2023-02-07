import React from 'react';
import AddToDo from './AddToDo/AddToDo';
import { ToDoPageLayout } from './style';
import ToDoList from './ToDoList/ToDoList';

export default function ToDoPage(){
    return (
        <ToDoPageLayout>
            <AddToDo></AddToDo>
            <ToDoList></ToDoList>
        </ToDoPageLayout>
    )
}