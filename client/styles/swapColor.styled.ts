import { css } from "styled-components";

const swapColor = css`
  --color: ${({ theme }) => theme.colors.background};
  --background-color: ${({ theme }) => theme.colors.color};
  fill: ${({ theme }) => theme.colors.background};

  *::selection,
  &::selection {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color};
  }
`;

export default swapColor;
