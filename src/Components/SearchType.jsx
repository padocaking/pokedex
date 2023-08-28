import styled from 'styled-components'
import Type from './Type'
import { useState } from 'react'
import theme from '../Styles/Theme'
import { useSearch } from '../Providers/SearchProvider'

const Container = styled.div`
    display: flex;
    gap: 10px;

    div {
        width: 90px;
        height: 30px;
        box-shadow: 0px 1px 4px black;
    }
`

const Button = styled.button`
    background-color: ${props => props.active ? theme.blue : 'white'};
    color: ${props => props.active ? 'white' : 'black'};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    font-weight: 500;
    transition: 0.15s ease all;
`

const SearchType = ({ type }) => {
    const [typeActive, setTypeActive] = useState(false)
    const [weaknessActive, setWeaknessActive] = useState(false)
    
    const { types, setTypes, weakness, setWeakness, insertSearch } = useSearch()

    const handleType = () => {
        setTypeActive(!typeActive)
        insertSearch(type, types, setTypes)
    }

    const handleWeakness = () => {
        setWeaknessActive(!weaknessActive)
        insertSearch(type, weakness, setWeakness)
    }

    return (
        <Container>
            <Type type={type} />
            <Button active={typeActive} onClick={() => handleType()}>T</Button>
            <Button active={weaknessActive} onClick={() => handleWeakness()}>W</Button>
        </Container>
    )
}

export default SearchType