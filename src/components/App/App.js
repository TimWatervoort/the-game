import React, { useState } from 'react';
import './App.css';
import DeckList from '../DeckList';
import TableList from '../TableList';
import InstructionsView from '../InstructionsView/';
import { views, greetings } from '../../utils/constants';

function App() {
  const [ view, setView ] = useState(views.DECKS);

  const greeting = greetings[Math.floor(Math.random() * greetings.length )];

  return (
    <div className='App game-text'>
      <div className='container text-center pt-5'>
        <div className='row'>
          <div className='col'>
            <h2 className='game-highlight'>{ greeting }</h2>
            <h1 className='game-header'>A GAME.</h1>
          </div>
        </div>

        <div className='row my-3 text-center mx-auto'>
          <div className='col-6'>
            <button onClick={() => setView(views.DECKS)} className='btn btn-danger game-button game-text'>Decks</button>
          </div>
          <div className='col-6'>
            <button onClick={() => setView(views.TABLES)} className='btn btn-danger game-button game-text'>Tables</button>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <button onClick={() => setView(views.INSTRUCTIONS)} className='btn btn-danger game-button game-text'>Instructions</button>
          </div>
        </div>
        
        { view === views.DECKS && <DeckList /> }
        { view === views.TABLES && <TableList /> }
        { view === views.INSTRUCTIONS && <InstructionsView />}

      </div>
    </div>
  );
}

export default App;
