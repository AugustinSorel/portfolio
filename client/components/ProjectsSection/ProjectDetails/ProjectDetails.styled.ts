import styled from "styled-components";
import swapColor from "../../../styles/swapColor.styled";
import { extraSmallText } from "../../../styles/texts.styled";

export const Container = styled.div`
  display: flex;
  gap: var(--gap);
`;

export const Category = styled.h3`
  ${extraSmallText}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  border: var(--border-height) solid var(--color);
  padding: var(--gap) calc(var(--gap) * 4);
  border-radius: calc(var(--border-radius) * 2);
`;

export const Date = styled.h3`
  ${extraSmallText}
  ${swapColor}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  border: var(--border-height) solid var(--background-color);
  padding: var(--gap) calc(var(--gap) * 4);
  border-radius: calc(var(--border-radius) * 2);
  background-color: var(--background-color);
`;
