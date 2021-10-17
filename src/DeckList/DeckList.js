import React, { useState, useEffect } from 'react';
import DeckButton from '../DeckButton';
import CardModal from '../CardModal';
import { decks } from '../decks';

const DeckList = () => {
  const [showModal, setShowModal] = useState(false);
  const [card, setCard] = useState({});

  useEffect(() => {
    if (card.title) {
      setShowModal(true)
    } else {
      setShowModal(false);
    }
  }, [card]);

  const handleClose = () => {
    setCard({});
  }

  const drawCard = deck => {
    const card = {
      ...deck,
      selectedCard: deck?.cards[Math.floor(Math.random() * deck.cards.length)]
    }
    setCard(card);
  }

  const deckButtons = decks.map(deck => {
    return <DeckButton onClick={() => drawCard(deck)} deck={deck} key={`deckButton_${deck.number}`} />
  });

  return (
    <div className='row'>
      { deckButtons }
      <CardModal card={card} showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default DeckList;
