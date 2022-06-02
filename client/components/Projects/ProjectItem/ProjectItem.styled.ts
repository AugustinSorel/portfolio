import styled from "styled-components";
import { extraSmallText, mediumText } from "../../../styles/texts.styled";

export const ListItem = styled.li`
  cursor: pointer;
  background-color: var(--background-color);
  padding: calc(var(--gap) * 3) 0;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:first-child) {
    margin-top: 2%;
  }
`;

export const Title = styled.h2`
  ${mediumText}
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Category = styled.h3`
  ${extraSmallText}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  margin: 0 auto;
  border: var(--border-height) solid var(--color);
  padding: var(--gap) calc(var(--gap) * 10);
  border-radius: calc(var(--border-radius) * 2);
`;
