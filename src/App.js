import React from 'react';
import './App.css';
import Pokedex from "./Pokedex.js";
import {PokeCard} from "./PokeCard.js";

function App() {
  return (
    <div className="App">
      <div>
      {Pokedex.map(i => (
      <PokeCard name ={i.name} id = {i.id} type={i.type} base_experience={i.base_experience}/>    
      ))}
      </div>    
    </div>
   )
}

export default App;
