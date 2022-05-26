import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#fff",
    color: "#000",
  },

  fontSizes: {
    extraSmall: "1vw",
    small: "max(2vw, 1rem)",
    medium: "3vw",
    large: "4vw",
    extraLarge: "9vw",
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
  },
};

export default theme;
