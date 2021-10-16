import React from 'react';
import DeckButton from '../DeckButton';
import { decks } from '../decks';

const deckButtons = decks.map(deck => {
  return <DeckButton deck={deck} key={`deckButton_${deck.number}`} />
});

const DeckList = () => {
  return (
    <div className='row'>
      { deckButtons }
    </div>
  );
}

export default DeckList;
