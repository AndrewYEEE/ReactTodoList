import {Routes, Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";


import ToDoPage from "./ToDoPage/ToDoPage";


export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ToDoPage></ToDoPage>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

