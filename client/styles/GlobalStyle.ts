import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --background-color: ${({ theme }) => theme.colors.background};
        --color: ${({ theme }) => theme.colors.color};
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--color);
        color: var(--color);
    }
`;

export default GlobalStyle;
