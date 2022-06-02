import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";
import {
  extraSmallText,
  largeText,
  mediumText,
  smallText,
} from "../../../styles/texts.styled";

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

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsListItem = styled.li`
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

export const ProjectTitle = styled.h2`
  ${mediumText}
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  text-align: center;
`;

export const ProjectCategory = styled.h3`
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
