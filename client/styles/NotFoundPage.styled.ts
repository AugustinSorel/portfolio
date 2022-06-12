import styled from "styled-components";
import swapColor from "./swapColor.styled";
import { mediumText } from "./texts.styled";

export const Main = styled.main`
  margin-top: var(--gap);
  background-color: var(--background-color);
  padding: min(30%, 200px) 0;
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) * 2);
`;

export const Text = styled.h2`
  ${mediumText}
  margin: auto;
  text-transform: capitalize;
`;

export const Anchor = styled.a`
  ${swapColor}
  background-color: var(--background-color);
  color: var(--color);
  padding: calc(var(--gap) * 2) calc(var(--gap) * 5);
  text-transform: capitalize;
  margin: auto;
  cursor: pointer;
`;
