// React Library
import React from 'react';
import { useState } from 'react';

// Styles
import './App.css';

// Components
import ToDoForm from './ui/ToDoForm/ToDoForm.jsx';
import ToDoList from './components/ToDoList/ToDoList.jsx';

function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems([...items, item])
  }

  const deleteItemHandler = (item) => {
    setItems(items.filter((element, index) => index !== item))
  }

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <ToDoForm addItem={addItemHandler} />
      <ToDoList items={items} deleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
