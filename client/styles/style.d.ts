import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      color: string;
    };

    fontSizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    fontSizesMobile: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    fontWeights: {
      light: number;
      regular: number;
      bold: number;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };

    sizes: {
      gap: string;
    };
  }
}
