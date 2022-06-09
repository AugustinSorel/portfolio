import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const Container = styled.div`
  flex: 4;
  background-color: var(--background-color);

  display: flex;
  padding: calc(var(--gap) * 5);
  gap: calc(var(--gap) * 8);
`;

export const Text = styled.h2`
  ${mediumText}
  white-space: nowrap;
  text-transform: capitalize;
  height: min-content;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  display: flex;
  align-items: center;
  margin: auto;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) * 5);

  button {
    align-self: flex-end;
    padding: calc(var(--gap) * 2);
    text-transform: capitalize;
  }
`;
