import { createGlobalStyle } from "styled-components";
import devices from "./devices";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --background-color: ${({ theme }) => theme.colors.background};
        --color: ${({ theme }) => theme.colors.color};

        --font-size-extra-small: ${({ theme }) => theme.fontSizes.extraSmall};
        --font-size-small: ${({ theme }) => theme.fontSizes.small};
        --font-size-medium: ${({ theme }) => theme.fontSizes.medium};
        --font-size-large: ${({ theme }) => theme.fontSizes.large};
        --font-size-extra-large: ${({ theme }) => theme.fontSizes.extraLarge};

        --font-weight-light: ${({ theme }) => theme.fontWeights.light};
        --font-weight-regular: ${({ theme }) => theme.fontWeights.regular};
        --font-weight-bold: ${({ theme }) => theme.fontWeights.bold};

        --gap: ${({ theme }) => theme.sizes.gap};

        @media ${devices.mobile} {
            --font-size-extra-small: ${({ theme }) =>
              theme.fontSizesMobile.extraSmall};
            --font-size-small: ${({ theme }) => theme.fontSizesMobile.small};
            --font-size-medium: ${({ theme }) => theme.fontSizesMobile.medium};
            --font-size-large: ${({ theme }) => theme.fontSizesMobile.large};
            --font-size-extra-large: ${({ theme }) =>
              theme.fontSizesMobile.extraLarge};
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--color);
        color: var(--color);
        fill: var(--color);
        font-size: var(--font-size-medium);
        font-weight: var(--font-weight-regular);
        padding: var(--gap);
    }

    ::selection{
        background-color: var(--color);
        color: var(--background-color);
    }
`;

export default GlobalStyle;
