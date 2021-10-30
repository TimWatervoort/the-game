import React from 'react';
import './GameTable.css';

const GameTable = ({ table }) => {
  const itemList = table.items.map((item, i) => {
    return <p key={`${table.title}_${i}`} className='game-text my-3 text-left'>{ item }</p>;
  });

  return (
    <div className='container my-3'>
      <div className='card'>
        <div className='card-body table-card text-dark'>
          <h4 className={`table-header text-${table.color}`}>{ table.title }</h4>
          <hr />
          { itemList }
        </div>
      </div>
    </div>
  )
}

export default GameTable;
