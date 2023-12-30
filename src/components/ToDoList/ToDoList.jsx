// React Library
import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';

// Styles
import styles from './ToDoList.module.css';

const ToDoList = ({ items, deleteItem }) => {
  return (
    <div className={styles.toDoListContainer}>
      {!items.length && <h2>ToDo List Is Empty</h2>}
      {items.map((item, index) => <ToDoItem key={index} item={item} index={index} deleteItem={deleteItem} />)}
    </div>
  )
}

export default ToDoList
