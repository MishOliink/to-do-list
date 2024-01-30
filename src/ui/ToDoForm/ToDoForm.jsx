// React Library
import React from 'react';
import { useState } from 'react';

// Styles
import styles from './ToDoForm.module.css';

const ToDoForm = ({ addItem }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addItem(text);
    setText('');
  };

  return (
    <div className={styles.toDoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new ToDo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
