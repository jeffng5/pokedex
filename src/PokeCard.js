import React from "react"
import './App.css';
// import Pokedex from "./Pokedex.js"

const PokeCard = ({id, name, type, base_experience}) => (
    <div class='flex-container'>
    <div>
    <h4>{name}</h4>
    <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
    <h4>Type: {type}</h4>
    <h4>EXP: {base_experience}</h4>
    </div>
    </div>
) 




export {PokeCard}