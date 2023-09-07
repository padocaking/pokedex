import styled from 'styled-components'
import theme from '../Styles/Theme'

const Container = styled.footer`
    margin-top: 50px;
    height: 250px;
    background-color: ${theme.lighterBackground};
`

const Footer = () => {
    return (
        <Container>
            Footer
        </Container>
    )
}

export default Footer