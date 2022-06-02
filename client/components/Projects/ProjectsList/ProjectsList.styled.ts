import styled from "styled-components";
import devices from "../../../styles/devices";
import {
  extraSmallText,
  mediumText,
  smallText,
} from "../../../styles/texts.styled";

export const List = styled.ul`
  display: grid;
  gap: var(--gap);
  list-style: none;
  grid-template-columns: repeat(2, 1fr);

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;
