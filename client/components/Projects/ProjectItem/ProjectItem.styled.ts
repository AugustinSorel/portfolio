import styled from "styled-components";
import {
  extraSmallText,
  mediumText,
  smallText,
} from "../../../styles/texts.styled";

export const ListItem = styled.li`
  cursor: pointer;
  background-color: var(--background-color);
  padding: calc(var(--gap) * 3) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 2%;
  }
`;

export const Title = styled.h2`
  ${mediumText}
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  text-align: center;
`;

export const Category = styled.h3`
  ${extraSmallText}
  font-weight: var(--font-weight-bold);
  margin: 0 auto;
  border: var(--border-height) solid var(--color);
  padding: var(--gap) calc(var(--gap) * 10);
  border-radius: calc(var(--border-radius) * 2);
`;

export const ProjectTechList = styled.ul``;

export const ProjectTechListItem = styled.li`
  list-style: none;
`;

export const ProjectTechListItemText = styled.h4`
  ${smallText}
  text-align: center;
`;
