import React, { useState } from 'react';
import { calculateWinner } from '../helpers.js';
import Board from './Board.js';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = () => {};

  const jumpTo = () => {};

  const renderMoves = () => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
