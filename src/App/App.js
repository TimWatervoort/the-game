import React, { useState } from 'react';
import './App.css';
import DeckList from '../DeckList';
import TableList from '../TableList/';
import { views, greetings } from '../constants';

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

        <div className='row my-3'>
          <div className='col-6'>
            <button onClick={() => setView(views.DECKS)} className='btn btn-danger game-button game-text'>Decks</button>
          </div>
          <div className='col-6'>
            <button onClick={() => setView(views.TABLES)} className='btn btn-danger game-button game-text'>Tables</button>
          </div>
        </div>
        
        { view === views.DECKS && <DeckList /> }
        { view === views.TABLES && <TableList /> }

      </div>
    </div>
  );
}

export default App;
