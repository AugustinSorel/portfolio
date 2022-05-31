import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";
import { largeText } from "../../../styles/texts.styled";

export const Section = styled.section`
  margin-top: var(--gap);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  background-color: #000;
  width: 100%;

  & > * {
  }
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
  display: flex;
  flex-wrap: wrap;

  gap: var(--gap);
`;

export const ProjectsListItem = styled.li`
  background-color: var(--background-color);
  list-style: none;

  width: calc(50% - var(--gap) / 2);
`;

export const ProjectTitle = styled.h2`
  ${largeText}
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;

export const ProjectDescription = styled.p``;
