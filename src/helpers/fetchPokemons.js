import axios from "axios";

import { URL_BASE_POKEMONS } from "@/constants/urlPokemon";

export const getPokemonsFetch = async () => {
    const { data } = await axios.get(URL_BASE_POKEMONS)
    return data.results
};

export const getPokemonInfo = async(listPokemon, pokeList) => {
    listPokemon.forEach( async (pokemon) => {
        const { data } =  await axios.get(pokemon.url)
        const { name, sprites: { other: { 'official-artwork': { front_default } } } } = data
        const pokemonInfo = {
            name,
            front_default
        }
        pokeList.push(pokemonInfo)
    });
}
