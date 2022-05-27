import { css } from "styled-components";

const changeColor = css`
  color: var(--background-color);
  background-color: var(--color);

  *::selection,
  &::selection {
    background-color: var(--background-color);
    color: var(--color);
  }
`;

export default changeColor;
