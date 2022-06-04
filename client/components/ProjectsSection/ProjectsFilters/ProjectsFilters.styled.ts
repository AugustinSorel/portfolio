import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";

export const List = styled.ul`
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

export const ListItem = styled.li`
  display: flex;
  flex: 1;

  h2 {
    margin: auto;
  }
`;
