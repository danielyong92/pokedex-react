import React from 'react';
import { useEffect } from 'react';

const Home = () => {
    let pokemon;
    const pokemonSearch = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/1`;
        const response = await fetch(url);
      
        pokemon = await response.json();
        console.log("pokemon", pokemon);
    }

    useEffect(() => {
        pokemonSearch();
    });

    return (
        <div>THIS IS HOME PAGE</div>
    )
}

export default Home;