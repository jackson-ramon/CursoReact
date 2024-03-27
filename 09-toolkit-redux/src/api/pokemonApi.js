import axios from 'axios';

export const pokemonApi = axios.create({
    basaeURL: 'https://pokeapi.co/api/v2'
});