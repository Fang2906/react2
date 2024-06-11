// src/PlayersList.js
import React from 'react';
import Player from './Player.js';
import joueurs from './joueurs';

const PlayersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1">
      {joueurs.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
  );
};

export default PlayersList;
