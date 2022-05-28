import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#fff",
    color: "#000",
    success: "#10ac84",
  },

  fontSizes: {
    extraSmall: "1vw",
    small: "2vw",
    medium: "3vw",
    large: "4vw",
    extraLarge: "9vw",
  },

  fontSizesMobile: {
    extraSmall: "1rem",
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem",
    extraLarge: "2.75rem",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },

  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1440px",
  },

  sizes: {
    gap: "6px",
    borderHeight: "4px",
  },
};

export default theme;
