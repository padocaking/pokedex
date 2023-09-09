import styled, { keyframes } from 'styled-components'
import Type from './Type'
import theme from '../Styles/Theme'

const grow = keyframes`
 from {
    padding: 3px
 }
 to {
    padding: 0px;
 }
`

const fadein = keyframes`
0% {
    opacity: 0;
    transform: translateX(25px)
}

75% {
    opacity: 1;
}

100% {
    opacity: 1;
    transform: translateX(0px)
}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 3px;
    animation: all 0.2s;
    cursor: pointer;
    animation: ${fadein} 0.85s ease-out;

    &:hover {
        //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        img {
            animation: ${grow} 0.2s ease-in;
            padding: 0px;
        }
    }

    picture {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 250px;
        background: radial-gradient(#b4b4b481 40%, white 100%)
    }

    img {
        width: 100%;
        padding: 3px;

        &:hover {
            animation: ${grow} 0.2s ease-in;
            padding: 0px;
        }
    }

    h5 {
        text-transform: capitalize;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 3px;
    }

    span {
        font-size: 1rem;
        font-weight: 300;
        margin-top: 3px;
    }
`

const TypeContainer = styled.div`
    display: flex;
    gap: 10px;

    > div {
        width: 75px;

        &:hover {
            box-shadow: 0px 0px 0px 1px inset white;
            transition: 0.1s linear all;
        }
    }
`

const PokedexCard = ({ props }) => {
    return (
        <Container>
            <picture>
                <img src={props['sprites']['other']['official-artwork']['front_default']} alt={props.name} />
            </picture>
            <span>Nº {props.id}</span>
            <h5>{props.name}</h5>
            <TypeContainer>
                {props.types.map((item) => {
                    return (
                        <Type type={item.type.name} />
                    )
                })}
            </TypeContainer>
        </Container>
    )
}

export default PokedexCard