import styled from "styled-components";
import swapColor from "../../../styles/swapColor.styled";
import { mediumText } from "../../../styles/texts.styled";

export const Subtitle = styled.h2`
  ${swapColor}
  ${mediumText}
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: capitalize;
`;
