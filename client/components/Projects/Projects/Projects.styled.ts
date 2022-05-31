import styled from "styled-components";
import devices from "../../../styles/devices";

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
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--gap);
`;

export const ProjectsListItem = styled.li`
  background-color: var(--background-color);
  list-style: none;
  padding: 1rem;
`;
