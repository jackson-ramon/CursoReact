import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";


export const getPokemons = ( page = 0 ) => {
    // return async( dispatch, getState ) => {
    return ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar peticion http

        // Con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();

        // Con Axios
        // const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        // const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        
        // Manual :v
        const data = {
            count: 1302,
            next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=10",
            previous: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
            results: [
                {
                name: "metapod",
                url: "https://pokeapi.co/api/v2/pokemon/11/"
                },
                {
                name: "butterfree",
                url: "https://pokeapi.co/api/v2/pokemon/12/"
                },
                {
                name: "weedle",
                url: "https://pokeapi.co/api/v2/pokemon/13/"
                },
                {
                name: "kakuna",
                url: "https://pokeapi.co/api/v2/pokemon/14/"
                },
                {
                name: "beedrill",
                url: "https://pokeapi.co/api/v2/pokemon/15/"
                },
                {
                name: "pidgey",
                url: "https://pokeapi.co/api/v2/pokemon/16/"
                },
                {
                name: "pidgeotto",
                url: "https://pokeapi.co/api/v2/pokemon/17/"
                },
                {
                name: "pidgeot",
                url: "https://pokeapi.co/api/v2/pokemon/18/"
                },
                {
                name: "rattata",
                url: "https://pokeapi.co/api/v2/pokemon/19/"
                },
                {
                name: "raticate",
                url: "https://pokeapi.co/api/v2/pokemon/20/"
                }
            ]
        }
        // const data = resp.json();

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
};