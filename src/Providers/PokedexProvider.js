import { useContext, createContext, useState, useEffect } from "react"

const PokedexContext = createContext()

const PokedexProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [pokedexList, setPokedexList] = useState([])
    const [minLimit, setMinLimit] = useState(1)
    const [maxLimit, setMaxLimit] = useState(12)
    let increase = 12

    const fetchPokemon = async (pokemon) => {
        try {
            setLoading(true)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }

    const renderPokemons = async () => {
        let newPokedex = []

        for (let i = minLimit; i <= maxLimit; i++) {
            const newPokemon = await fetchPokemon(i)
            newPokedex.push(newPokemon)
        }

        setPokedexList([...pokedexList, ...newPokedex])

        setMinLimit(maxLimit + 1)
        setMaxLimit(maxLimit + increase)

        setLoading(false)
    }

    return (
        <PokedexContext.Provider
        value = {{
            loading,
            pokedexList,
            renderPokemons
        }}>
            {children}
        </PokedexContext.Provider>
    )
}

export const usePokedex = () => useContext(PokedexContext)

export default PokedexProvider