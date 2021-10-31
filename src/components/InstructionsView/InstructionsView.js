import React from 'react';

const InstructionsView = () => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='card mt-3'>
            <div className='card-body game-text text-dark'>
              <h3 className='game-subheader'>Instructions</h3>
              <hr />
              <p>Get a token</p>
              <p>If you are in, the token is upright. If you are out, the token is on its side.</p>
              <p>Roll a D8 to determine your deck.</p>
              <p>Draw a card based on the deck you get.</p>
              <p>If you don't want to perform the action on your card, set yourself to out.</p>
              <p>If you are out, your D8 becomes a D4.</p>
              <p>Keep track of your own points.</p>
              <p>First person to 20 points wins.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionsView;
