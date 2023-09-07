import { createContext, useContext, useState } from "react";

const PokedexContext = createContext()

const PokedexProvider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonLimit, setPokemonLimit] = useState(12)

    const fetchPokemon = async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        return data
    }

    const renderPokemons = async () => {
        const pokemonArr = []

        for (let i = 1; i <= pokemonLimit; i++) {
            const newPokemon = await fetchPokemon(i)
            pokemonArr.push(newPokemon)
        }

        setPokemonList(pokemonArr)
    }

    const addPokemonLimit = (number) => {
        setPokemonLimit(pokemonLimit + number)
    }

    return (
        <PokedexContext.Provider
            value={{
                pokemonList,
                renderPokemons,
                pokemonLimit,
                addPokemonLimit
            }}>
            { children }
        </PokedexContext.Provider>
    )
}

export const usePokedex = () => useContext(PokedexContext)

export default PokedexProvider