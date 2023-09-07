import styled from 'styled-components'

const Container = styled.div`
    background-color: ${props => props.background};
    color: ${props => props.color};
    padding: 3px 10px 3px 10px;
    border-radius: 5px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`

const Type = ({ type }) => {
    const typeStyle = {
        background: '',
        color: ''
    }

    switch (type) {
        case 'normal':
            typeStyle.background = '#6b6b6b'
            typeStyle.color = 'white'
            break
        case 'fire':
            typeStyle.background = '#e84803'
            typeStyle.color = 'white'
            break
        case 'water':
            typeStyle.background = '#1561b3'
            typeStyle.color = 'white'
            break
        case 'electric':
            typeStyle.background = '#d2c507'
            typeStyle.color = 'black'
            break
        case 'grass':
            typeStyle.background = '#63c62e'
            typeStyle.color = 'black'
            break
        case 'ice':
            typeStyle.background = '#40ddeb'
            typeStyle.color = 'black'
            break
        case 'fighting':
            typeStyle.background = '#902d02'
            typeStyle.color = 'white'
            break
        case 'poison':
            typeStyle.background = '#7e31a2'
            typeStyle.color = 'white'
            break
        case 'ground':
            typeStyle.background = '#9f823f'
            typeStyle.color = 'white'
            break
        case 'flying':
            typeStyle.background = '#7175c6'
            typeStyle.color = 'white'
            break
        case 'psychic':
            typeStyle.background = '#e556a5'
            typeStyle.color = 'white'
            break
        case 'bug':
            typeStyle.background = '#729f3f'
            typeStyle.color = 'white'
            break
        case 'rock':
            typeStyle.background = '#846e30'
            typeStyle.color = 'white'
            break
        case 'ghost':
            typeStyle.background = '#382195'
            typeStyle.color = 'white'
            break
        case 'dragon':
            typeStyle.background = '#4d188a'
            typeStyle.color = 'white'
            break
        case 'steel':
            typeStyle.background = '#a1a1a1'
            typeStyle.color = 'black'
            break
        case 'dark':
            typeStyle.background = '#342601'
            typeStyle.color = 'white'
            break
        case 'fairy':
            typeStyle.background = '#f2a6ff'
            typeStyle.color = 'black'
            break
    }

    return (
        <Container background={typeStyle.background} color={typeStyle.color}>
            {type}
        </Container>
    )
}

export default Type