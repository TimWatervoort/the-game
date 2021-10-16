import React from 'react';
import DeckButton from '../DeckButton';

const decks = [
  { number: 1, title: 'Curse' },
  { number: 2, title: 'Distortion' },
  { number: 3, title: 'Democracy' },
  { number: 4, title: 'Melee' },
  { number: 5, title: 'Trial' },
  { number: 6, title: 'Duel' },
  { number: 7, title: 'Champion' },
  { number: 8, title: 'Duel' },
];

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
