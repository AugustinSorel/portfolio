import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#fff",
    color: "#000",
    success: "#10ac84",
  },

  fontSizes: {
    extraSmall: "max(1vw, 1rem)",
    small: "max(2vw, 1.5rem)",
    medium: "max(3vw, 2rem)",
    large: "max(4vw, 2.5rem)",
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
    borderHeight: "max(3px, 0.2vw)",
    borderRadius: "24px",
  },
};

export default theme;
