// src/App.js
import React from 'react';
import './index.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center my-8">Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
