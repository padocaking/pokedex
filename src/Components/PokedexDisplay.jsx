import styled from 'styled-components'
import { usePokedex } from '../Providers/PokedexProvider'
import PokedexCard from './PokedexCard'
import { useEffect, useState } from 'react'

const Content = styled.div`
`

const Container = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 5px;
`

const Loading = styled.div`
    font-size: 2rem;
    text-align: center;
    display: ${props => props.loading ? `block` : `none`};
    background-color: red;
`

const PokedexDisplay = () => {
    const { pokedexList, renderPokemons, loading } = usePokedex()

    useEffect(() => {
        renderPokemons()
    }, [])

    return (
        <Content className='content'>
            <Container>
                {pokedexList.map((pokemon) => (
                    <PokedexCard props={pokemon} />
                ))}
            </Container>
            <Loading loading={loading}>LOADING...</Loading>
            <button onClick={renderPokemons}>Mostrar Mais</button>
        </Content>
    )
}

export default PokedexDisplay