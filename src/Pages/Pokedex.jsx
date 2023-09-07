import styled from 'styled-components'
import PokemonSearch from '../Components/PokedexSearch'
import { usePokedex } from '../Providers/PokedexProvider'
import { useEffect } from 'react'

const Container = styled.div`

`

const Title = styled.section`
    text-align: center;

    h1 {
        font-size: 3rem;
        padding: 30px 5px 30px 5px;
    }
`

const Pokedex = () => {
    const { pokemonList, addPokemonLimit, renderPokemons, pokemonLimit } = usePokedex()

    const click = () => {
        addPokemonLimit(12)
    }

    useEffect(() => {
        renderPokemons()
    }, [pokemonLimit])

    return (
        <Container>
            <Title>
                <h1 onClick={click}>POKÉDEX</h1>
            </Title>
            <PokemonSearch />
        </Container>
    )
}

export default Pokedex