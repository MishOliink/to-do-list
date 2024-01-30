// React Library
import React from 'react';

// Styles
import styles from './ToDoItem.module.css';

// Icons components
import { RiTodoFill } from 'react-icons/ri';

const ToDoItem = ({ item, deleteItem }) => {
  return (
    <div className={styles.toDoItem} onDoubleClick={() => deleteItem(item.id)}>
      <RiTodoFill className={styles.itemIcon} />
      <div className={styles.item}>{item.item}</div>
    </div>
  );
};

export default ToDoItem;
