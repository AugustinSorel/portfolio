import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";
import { largeText, mediumText, smallText } from "../../../styles/texts.styled";

export const Section = styled.section`
  margin-top: var(--gap);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  background-color: #000;
  width: 100%;
`;

export const FilterList = styled.ul`
  list-style: none;
  padding: var(--gap) 0;
  background-color: var(--background-color);
  display: flex;

  @media ${devices.desktop} {
    ${swapColor}
  }
  @media ${devices.mobile} {
    flex-direction: column;
    gap: var(--gap);
  }
`;

export const FilterListItem = styled.li`
  display: flex;
  flex: 1;

  h2 {
    margin: auto;
  }
`;

export const ProjectsList = styled.ul`
  display: grid;
  gap: var(--gap);
  list-style: none;
  grid-template-columns: repeat(2, 1fr);

  @media ${devices.desktop} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsListItem = styled.li`
  background-color: var(--background-color);

  & > *:not(:first-child) {
    margin-top: 2%;
  }
`;

export const ProjectTitle = styled.h2`
  ${largeText}
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;

export const ProjectCategory = styled.h3`
  ${smallText}
  font-weight: var(--font-weight-bold);
  margin: 0 auto;
  min-width: 200px;
  border: var(--border-height) solid var(--color);
  width: min-content;
  padding: var(--gap) calc(var(--gap) * 10);
  border-radius: calc(var(--border-radius) * 2);
  text-align: center;
`;

export const ProjectTechList = styled.ul``;

export const ProjectTechListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const ProjectTechListItemText = styled.h5`
  ${smallText}
`;
