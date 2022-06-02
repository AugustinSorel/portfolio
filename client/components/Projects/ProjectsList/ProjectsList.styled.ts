import styled from "styled-components";
import devices from "../../../styles/devices";

export const ListContainer = styled.div`
  display: flex;
  gap: var(--gap);

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  gap: var(--gap);
  list-style: none;
  flex-direction: column;

  & > *:last-child {
    height: 100%;
  }
`;
