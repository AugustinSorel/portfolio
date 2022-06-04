import styled from "styled-components";
import devices from "../../../styles/devices";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  gap: var(--gap);

  @media ${devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
