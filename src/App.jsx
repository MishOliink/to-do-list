// React Library
import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Styles
import './App.css';

// Components
import ToDoForm from './ui/ToDoForm/ToDoForm.jsx';
import ToDoList from './components/ToDoList/ToDoList.jsx';

function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    const newItem = {
      item: item,
      isCompleted: false,
      id: uuidv4(),
    };

    setItems([...items, newItem]);
  };

  const deleteItemHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm addItem={addItemHandler} />
      <ToDoList items={items} deleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
