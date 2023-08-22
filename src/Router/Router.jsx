import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Pokemon from "../Pages/Pokemon"
import Games from "../Pages/Games"
import Pokedex from "../Pages/Pokedex"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Container = styled.div`
    padding-top: 80px;
`

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="/games" element={<Games />} />
                    <Route exact path="/pokemon/:id" element={<Pokemon />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default Router