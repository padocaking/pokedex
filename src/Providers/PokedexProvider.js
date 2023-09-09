import { useContext, createContext, useState, useEffect } from "react"
import { useSearch } from "./SearchProvider"

const PokedexContext = createContext()

const PokedexProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [pokedexList, setPokedexList] = useState([])
    const [minLimit, setMinLimit] = useState(1)
    const [maxLimit, setMaxLimit] = useState(12)
    let increase = 12
    const { advancedSearch } = useSearch()

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

    const fetchType = async (type) => {
        try {
            setLoading(true)
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
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

    const removeDuplicates = (arr) => {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    const filteredPokemons = async () => {
        const { types, weakness } = useSearch()
        let newPokemons = []

        weakness.map((weak) => {
            convertWeakness(weak, types)
        })

        removeDuplicates(types)

        types.map((type) => {
            const newPokemonArr = fetchType(type).pokemon
            newPokemons.push(...newPokemonArr)
        })

        removeDuplicates(newPokemons)

        return newPokemons
    }

    const convertWeakness = (weakness, typeArr) => {
        switch (weakness) {
            case 'normal':
                typeArr.push('fighting')
                break
            case 'fire':
                typeArr.push('water', 'ground', 'rock')
                break
            case 'water':
                typeArr.push('grass', 'electric')
                break
            case 'grass':
                typeArr.push('fire', 'ice', 'poison', 'flying', 'bug')
                break
            case 'electric':
                typeArr.push('ground')
                break
            case 'ice':
                typeArr.push('fire', 'fighting', 'rock', 'steel')
                break
            case 'fighting':
                typeArr.push('flying', 'psychic', 'fairy')
                break
            case 'poison':
                typeArr.push('ground', 'psychic')
                break
            case 'ground':
                typeArr.push('water', 'grass', 'ice')
                break
            case 'flying':
                typeArr.push('electric', 'ice', 'rock')
                break
            case 'psychic':
                typeArr.push('bug', 'ghost', 'dark')
                break
            case 'bug':
                typeArr.push('flying', 'rock', 'fire')
                break
            case 'rock':
                typeArr.push('water', 'grass', 'fighting', 'ground', 'steel')
                break
            case 'ghost':
                typeArr.push('ghost', 'dark')
                break
            case 'dragon':
                typeArr.push('ice', 'dragon', 'fairy')
                break
            case 'dark':
                typeArr.push('fighting', 'bug', 'fairy')
                break
            case 'steel':
                typeArr.push('fire', 'fighting', 'ground')
                break
            case 'fairy':
                typeArr.push('poison', 'steel')
                break
        }
    }

    return (
        <PokedexContext.Provider
        value = {{
            loading,
            pokedexList,
            renderPokemons,
            filteredPokemons
        }}>
            {children}
        </PokedexContext.Provider>
    )
}

export const usePokedex = () => useContext(PokedexContext)

export default PokedexProvider