import React from 'react';
import './DogsList.css';
const DogsList = ({ dogs }) => {
  return (
    <div className="DogList-container">
      {dogs.map((dog) => (
        <div key={dog.id}>
          <h3>{dog.name}</h3>
          <img src={dog.src} alt={dog.name} className="img-sm" />
        </div>
      ))}
    </div>
  );
};

export default DogsList;
