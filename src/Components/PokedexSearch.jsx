import styled from 'styled-components'
import theme from '../Styles/Theme'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import SearchType from './SearchType'
import SearchGen from './SearchGen'
import { useEffect, useRef, useState } from 'react'
import { useSearch } from '../Providers/SearchProvider'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: ${theme.color};
        font-size: 1.8rem;
        padding: 40px 20px 0px 20px;
    }
`

const SearchContainer = styled.section`
    background-color: ${theme.background};
`

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 20px 40px 20px;
`

const Input = styled.input`
    padding: 10px;
    border-radius: 5px 0px 0px 5px ;
    border: 3px solid ${theme.color};
    height: 100%;
    min-width: 100px;
    width: 400px;
    font-size: 1.25rem;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
    height: 100%;
    min-width: 40px;
    width: 70px;
    border-radius: 0px 5px 5px 0px ;
    font-size: 1.4rem;
    background-color: #4fb0d1;
    color: white;
`

const AdvancedSearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    color: ${theme.color};
    
    span {
        padding: 5px 10px 15px 10px;
        background-color: ${theme.lighterBackground};
        color: ${theme.color};
        height: 100%;
        cursor: pointer;
    } 
`

const Icon = styled.i`
    display: ${props => props.active ? 'block' : 'none'};
    padding: 4px 10px 4px 0px;
    background-color: ${theme.lighterBackground};
    font-size: 1.3rem;
    height: 100%;
    cursor: pointer;
`

const AdvancedSearchContainer = styled.section`
    overflow: hidden;
    height: ${props => `${props.height}px`};
    background-color: ${theme.lighterBackground};
    transition: 0.4s ease-in all;
`

const AdvancedSearchContent = styled.div`
    color: ${theme.color};
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 110px;
    transition: 0.2s ease all;

    @media (max-width: 1000px) {
        gap: 25px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`

const TypesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 5px 20px 5px;
    
    h4 {
        text-align: center;
        font-size: 1.75rem;
        font-weight: 600;
        padding: 15px 15px 25px 15px;
    }
`

const TypeDisplay = styled.div`
    display: grid;
    gap: 10px 150px;
    grid-template-columns: auto auto;

    @media (max-width: 1000px) {
        gap: 10px 80px;
    }

    @media (max-width: 550px) {
        gap: 10px 15px;
    }

    @media (max-width: 380px) {
        grid-template-columns: auto;
    }
`

const GenDisplay = styled.div`

`

const ApplyButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    :active {
        box-shadow: inset 2px 2px 0px #212121;
        font-size: 1.23rem;
    }
`
const ApplyButton = styled.button`
    padding: 10px;
    width: 200px;
    min-width: 40px;
    border-radius: 6px;
    font-size: 1.25rem;
    box-shadow: 3px 3px 0px #212121;
`

const PokemonSearch = () => {
    const [searchActive, setSearchActive] = useState(false)
    const [divHeight, setDivHeight] = useState(15)
    
    const { search, setSearch, advancedSearch } = useSearch()
    
    const myRef = useRef()

    let searchDivHeight
    
    const handleDivHeight = () => {
        if (divHeight === 15) {
            setDivHeight(searchDivHeight)
        } else {
            setDivHeight(15)
        }
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        alert(search)
    }

    const handleApply = () => {
        console.log(advancedSearch)
    }

    const handleAdvancedSearch = () => {
        setSearchActive(!searchActive)
        handleDivHeight()
    }

    useEffect(() => {
        searchDivHeight = myRef.current.offsetHeight + 75
    }, [searchActive, search])

    return (
        <>
        <SearchContainer>
            <Content className='content'>
                <span>Name or number</span>
                <SearchForm>
                    <Input type="text" required onChange={(e) => handleInput(e)} />
                    <Button type='submit' onClick={(e) => handleSearch(e)}>
                        <AiOutlineSearch />
                    </Button>
                </SearchForm>
            </Content>
        </SearchContainer>
        <AdvancedSearchContainer active={searchActive} height={divHeight}>
            <AdvancedSearchContent className='content' active={searchActive} ref={myRef}>
                <TypesContainer>
                    <h4>Types (T) and Weaknesses (W)</h4>
                    <TypeDisplay>
                        <SearchType type={'normal'} />
                        <SearchType type={'fire'} />
                        <SearchType type={'water'} />
                        <SearchType type={'electric'} />
                        <SearchType type={'grass'} />
                        <SearchType type={'ice'} />
                        <SearchType type={'fight'} />
                        <SearchType type={'poison'} />
                        <SearchType type={'ground'} />
                        <SearchType type={'flying'} />
                        <SearchType type={'psychic'} />
                        <SearchType type={'bug'} />
                        <SearchType type={'rock'} />
                        <SearchType type={'ghost'} />
                        <SearchType type={'dragon'} />
                        <SearchType type={'steel'} />
                        <SearchType type={'dark'} />
                        <SearchType type={'fairy'} />
                    </TypeDisplay>
                </TypesContainer>
                <TypesContainer>
                    <h4>Generations</h4>
                    <GenDisplay>
                        <SearchGen genNum={1} />
                        <SearchGen genNum={2} />
                        <SearchGen genNum={3} />
                        <SearchGen genNum={4} />
                        <SearchGen genNum={5} />
                        <SearchGen genNum={6} />
                        <SearchGen genNum={7} />
                        <SearchGen genNum={8} />
                        <SearchGen genNum={9} />
                    </GenDisplay>
                </TypesContainer>
            </AdvancedSearchContent>
            
            <ApplyButtonContainer>
                <ApplyButton onClick={() => handleApply()}>Apply</ApplyButton>
            </ApplyButtonContainer>

        </AdvancedSearchContainer>
        <AdvancedSearchButton onClick={() => handleAdvancedSearch()}>
            <span>Advanced Search</span>
            <Icon active={!searchActive}><BsFillArrowDownCircleFill /></Icon>
            <Icon active={searchActive}><BsFillArrowUpCircleFill /></Icon>
        </AdvancedSearchButton>
        </>
    )
}

export default PokemonSearch