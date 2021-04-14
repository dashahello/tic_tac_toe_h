import React from 'react';

const style = {
  background: 'pink',
  color: 'purple',
  border: '2px solid purple',
  fontSize: '30px',
  fontWeight: '800px',
  cursor: 'pointer',
  outline: 'none ',
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
