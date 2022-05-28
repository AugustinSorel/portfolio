import { css } from "styled-components";

const swapColor = css`
  color: var(--background-color);
  background-color: var(--color);
  fill: var(--background-color);

  *::selection,
  &::selection {
    background-color: var(--background-color);
    color: var(--color);
  }
`;

export default swapColor;
