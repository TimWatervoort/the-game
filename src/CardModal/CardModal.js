import React, { useState } from 'react';
import './CardModal.css';

const CardModal = ({ card, showModal, handleClose }) => {
  const [ showContent, setShowContent ] = useState(true);

  const getContentView = () => {
    return (
      <>
        <p className='game-modal-card-title text-center mb-3'>{ card.selectedCard?.title }</p>
        <p className='game-modal-card-content text-center'>{ card.selectedCard?.content }</p>
      </>
    );
  }

  const getInstructionView = () => {
    return (
      <p className='game-modal-card-content text-center mb-3'>{ card.description }</p>
    );
  }

  const closeModal = () => {
    handleClose();
    setShowContent(true);
  }

  return (
    <div>
      <div className={`game-modal game-modal-${showModal ? 'open' : 'closed'}`}>
        <div className='game-modal-body'>
          <div className='card game-modal-card'>
            <div className='card-body text-dark'>
              <h2 className='game-highlight game-modal-title text-center'>{ card.title }</h2>
              <hr />

              { showContent ? getContentView() : getInstructionView() }
              
              <div className='row mx-auto mt-4'>
                <div className='col'>
                  <button onClick={() => setShowContent(val => !val)} className='btn btn-primary game-text'>{ showContent ? 'Instructions' : 'Card' }</button>
                </div>
                <div className='col'>
                  <button onClick={closeModal} className='btn btn-danger game-text'>Close</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardModal.defaultProps = {
  card: {},
}

export default CardModal;
