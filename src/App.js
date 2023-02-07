import logo from './logo.svg';
import './App.css';
import TodoContext from './context/TodoContext';
import Router from './routes/Router';
import { useState, useEffect, useCallback } from 'react';
import useToDO from './utils/useToDo';

function App() {
  const {toDo, addToDo, deleteToDo, updateToDo} = useToDO();
  return (
    <TodoContext.Provider value={{
        data:toDo,
        addToDo: addToDo,
        updateToDo: updateToDo,
        deleteToDo: deleteToDo,
      }}>
      <Router></Router>
    </TodoContext.Provider>
  );
}

export default App;
