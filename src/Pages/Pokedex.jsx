import styled from 'styled-components'
import PokemonSearch from '../Components/PokedexSearch'
import PokedexDisplay from '../Components/PokedexDisplay'

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
    return (
        <Container>
            <Title>
                <h1>POKÉDEX</h1>
            </Title>
            <PokemonSearch />
            <PokedexDisplay />
        </Container>
    )
}

export default Pokedex