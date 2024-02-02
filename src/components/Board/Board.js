import React from 'react';
import Column from './Column';
import '../../styles/Board.css';

const Board = () => {
  return (
    <div className="board">
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  );
};

export default Board;
