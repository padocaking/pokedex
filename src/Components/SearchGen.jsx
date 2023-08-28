import styled from 'styled-components'
import theme from '../Styles/Theme'
import { AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react'
import { useSearch } from '../Providers/SearchProvider'

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 16px;

    span {
        font-size: 1.2rem;
        padding: 0px 15px 0px 0px;
    }

    input {
    }
`

const Checkbox = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.active ? theme.blue : 'white'};
    border-radius: 3px;
    border: 2px solid gray;
    transition: 0.05s ease all;
`

const Icon = styled.i`
    color: white;
`

const SearchGen = ({ genNum }) => {
    const [active, setActive] = useState(false)

    const { gen, setGen, insertSearch } = useSearch()

    const clickHandler = () => {
        setActive(!active)
        insertSearch(genNum, gen, setGen)
    }

    return (
        <Container onClick={() => clickHandler()}>
            <span>Generation {genNum}</span>
            <Checkbox active={active}>
                <Icon><AiOutlineCheck /></Icon>
            </Checkbox>
        </Container>
    )
}

export default SearchGen