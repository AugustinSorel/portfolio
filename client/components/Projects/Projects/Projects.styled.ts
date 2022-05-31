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
    background-color: var(--background-color);
  }
`;

export const FilterList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: var(--gap) 0;

  @media ${devices.mobile} {
    flex-direction: column;
    gap: var(--gap);
  }
`;

export const FilterListItem = styled.li``;

export const ProjectBox = styled.div``;
