import React from 'react';
import Task from './Task';
import '../../styles/Column.css';

const Column = ({ title }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <Task content="Task 1" />
      <Task content="Task 2" />
    </div>
  );
};

export default Column;
