// src/Player.js
import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ nom, equipe, nationalite, numero, age, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={nom} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nom}</div>
        <p className="text-gray-700 text-base">
          <strong>Équipe:</strong> {equipe}<br />
          <strong>Nationalité:</strong> {nationalite}<br />
          <strong>Numéro:</strong> {numero}<br />
          <strong>Âge:</strong> {age}
        </p>
      </div>
    </div>
  );
};

Player.propTypes = {
  nom: PropTypes.string.isRequired,
  equipe: PropTypes.string.isRequired,
  nationalite: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

Player.defaultProps = {
  nom: 'Unknown',
  equipe: 'Unknown',
  nationalite: 'Unknown',
  numero: 0,
  age: 0,
  image: 'https://via.placeholder.com/150'
};

export default Player;
