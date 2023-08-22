import styled, { ThemeProvider } from 'styled-components'

import { AiOutlineHome } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { TbPokeball } from 'react-icons/tb'
import { MdCatchingPokemon } from 'react-icons/md'
import { PiGameControllerDuotone } from 'react-icons/pi'
import { PiGameControllerFill } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled.header`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-size: 1.3rem;
    position: fixed;
`

const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        padding: 0px 25px 0px 25px;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const List = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;

    :hover {
        background-color: ${props => props.theme.hoverBackground};
        color: ${props => props.theme.hoverColor};
    }

    @media (max-width: 768px) {
        transform: ${props => props.openNav ? `translateX(0%)` : `translateX(-100%)`};
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 70%;
        flex-direction: column;
        align-items: flex-start;
        background-color: ${props => props.theme.background};
        transition: 0.2s ease all;
    }
`

const ListItem = styled.li`
    background-color: ${props => props.active ? props.theme.activeBackground : props.theme.background};
    color: ${props => props.active ? props.theme.activeColor : props.theme.color};
    border-bottom: ${props => props.active ? `3px solid ${props.theme.activeColor}` : `3px solid ${props.theme.activeBackground}`};
    display: flex;
    align-items: center;
    gap: 6px;
    height: 100%;
    padding: 20px;
    cursor: pointer;
    transition: 0.17s ease all;

    @media (max-width: 768px) {
        height: 80px;
        width: 100%;
        border: none;
    }
`

const Icon = styled.i`
    display: ${props => props.active ? `flex` : `none`};
    align-items: center;
`

const Pokeria = styled.h3`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: absolute;
        bottom: 7%;
        left: 0;
        width: 98%;
        text-align: center;
    }
`

const MenuIcon = styled.i`
    font-size: 2.15rem;
    position: absolute;
    left: 20px;

    @media (min-width: 768px) {
        display: none;
    }
`

const Blur = styled.div`
    display: none;
    transition: 0.2 ease all;

    @media (max-width: 768px) {
        display: ${props => props.openNav ? `block` : `none`};
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: #00000089;
    }

`

const theme = {
    background: '#252525',
    color: '#dcdcdc',
    activeBackground: '#1c1c1c',
    activeColor: '#f2f2f2',
    hoverBackground: '#1d1d1d',
    hoverColor: '#ffffff'
}

const Header = () => {
    const [currentPage, setCurrentPage] = useState('home')
    const [openNav, setOpenNav] = useState(false)

    const navigate = useNavigate()

    const clickHandle = (page) => {
        setCurrentPage(page)
        if (page === 'home') navigate('/')
        if (page === 'pokedex') navigate('/pokedex')
        if (page === 'games') navigate('/games')
    }

    const activeHandle = (page) => {
        if (currentPage === page) return true
    }

    const mobileMenu = () => {
        setOpenNav(!openNav)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Blur openNav={openNav} onClick={mobileMenu} />
                <Content className='content'>
                    <MenuIcon onClick={mobileMenu}>
                        <GiHamburgerMenu />
                    </MenuIcon>
                    <h3 onClick={() => clickHandle('home')}>POKÉRIA</h3>
                    <List openNav={openNav}>
                        <ListItem active={activeHandle('home')} onClick={() => clickHandle('home')} desktop>
                            <Icon active={!activeHandle('home')}><AiOutlineHome /></Icon>
                            <Icon active={activeHandle('home')}><AiFillHome /></Icon>
                            <span>Home</span>
                        </ListItem>

                        <ListItem active={activeHandle('pokedex')} onClick={() => clickHandle('pokedex')} desktop>
                            <Icon active={!activeHandle('pokedex')}><TbPokeball /></Icon>
                            <Icon active={activeHandle('pokedex')}><MdCatchingPokemon /></Icon>
                            <span>Pokédex</span>
                        </ListItem>

                        <ListItem active={activeHandle('games')} onClick={() => clickHandle('games')} desktop>
                            <Icon active={!activeHandle('games')}><PiGameControllerDuotone /></Icon>
                            <Icon active={activeHandle('games')}><PiGameControllerFill /></Icon>
                            <span>Games</span>
                        </ListItem>
                        <Pokeria desktop>POKÉRIA</Pokeria>
                    </List>
                </Content>
            </Container>
        </ThemeProvider>
    )
}

export default Header