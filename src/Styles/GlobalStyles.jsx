import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Oxanium', cursive;
    }

    button, input, select, option {
        border: none;
    }

    button, select, option {
        cursor: pointer;
    }

    input:focus {
        outline: none;
    }

    ul {
        list-style: none;
    }
    
    .content {
        max-width: 1200px;
        margin: 0 auto;
    }
`

export default GlobalStyles