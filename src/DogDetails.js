import React from 'react';
import './DogDetails.css';

const DogDetails = ({ dog }) => {
  const { name, age, src, facts } = dog;
  return (
    <div className="DogDetails-container">
      <div className="DogDetails-container-info">
        <h2 className="DogDetails-info">My name is {name}</h2>
        <h4 className="DogDetails-info">Age: {age} </h4>
        <div>
          <h3 className="DogDetails-info">About me!</h3>
          <ul>
            {facts.map((fact) => (
              <li>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
      <img src={src} alt={name} className="img-lg" />
    </div>
  );
};

export default DogDetails;
