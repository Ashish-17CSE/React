import './App.css'

import { useState, useSyncExternalStore } from "react";
import AnimalShow from "./AimalShow";
import { type } from "@testing-library/user-event/dist/type";

function getRendomeAimal() {
  const animal = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animal[Math.floor(Math.random() * animal.length)];
}

function App() {
  // State
  const [animals, setAnimals] = useState([]);

  // Spread oprator
  const handelClick = () => {
    setAnimals([...animals, getRendomeAimal()]);
  };

  // Map
  const renderedAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handelClick} className='addBtn'>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;
