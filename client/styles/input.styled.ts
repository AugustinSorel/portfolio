import { css } from "styled-components";
import { smallText } from "./texts.styled";

export const inputShared = css`
  ${smallText}
  border: none;
  border-bottom: var(--gap) solid var(--color);
  padding: 1rem;
  outline: none;
`;
