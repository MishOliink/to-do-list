// React Library
import React from 'react';

// Styles
import styles from './ToDoItem.module.css';

// Icons components
import { RiTodoFill } from "react-icons/ri";

const ToDoItem = ({ item, index, deleteItem }) => {
  return (
    <div className={styles.toDoItem} onDoubleClick={() => deleteItem(index)}>
      <RiTodoFill className={styles.itemIcon} />
      <div className={styles.item}>{item}</div>
    </div>
  )
}

export default ToDoItem;
