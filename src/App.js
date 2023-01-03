import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import NavBar from './NavBar';
import whiskey from './images/whiskey.jpg';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';
import tubby from './images/tubby.jpg';
App.defaultProps = {
  dogs: [
    {
      id: uuidv4(),
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      id: uuidv4(),
      name: 'Duke',
      age: 3,
      src: duke,
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.',
      ],
    },
    {
      id: uuidv4(),
      name: 'Perry',
      age: 4,
      src: perry,
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates the rain.',
      ],
    },
    {
      id: uuidv4(),
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.',
      ],
    },
  ],
};
function App({ dogs }) {
  console.log(dogs);
  return (
    <div className="App">
      <NavBar dogs={dogs} />
      <div>Dogs</div>
    </div>
  );
}

export default App;
