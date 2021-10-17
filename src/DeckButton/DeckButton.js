import React from 'react';
import './DeckButton.css';

const DeckButton = ({ deck, onClick }) => {
  return (
    <div className='col-md-3 my-3'>
      <div onClick={ onClick } className='card deck-button mx-auto'>
        <div className='card-body text-center text-dark'>
          <p className='game-header my-0 py-0'>{ deck.number }</p>
        </div>
      </div>
    </div>
  );
}

export default DeckButton;
