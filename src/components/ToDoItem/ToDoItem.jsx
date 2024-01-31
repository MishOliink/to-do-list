// React Library
import React from 'react';

// Styles
import styles from './ToDoItem.module.css';

// Icons components
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

const ToDoItem = ({ item, deleteItem }) => {
  return (
    <div className={styles.toDoItem} onDoubleClick={() => deleteItem(item.id)}>
      <RiTodoFill className={styles.itemIcon} />
      <div className={styles.item}>{item.item}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  );
};

export default ToDoItem;
