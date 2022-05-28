import styled from "styled-components";
import devices from "../../../styles/devices";
import { extraLargeText } from "../../../styles/texts.styled";

export const Title = styled.h1`
  ${extraLargeText}
  text-transform: uppercase;
  line-height: calc(var(--font-size-extra-large) * 0.55);
  overflow: hidden;
  background-color: var(--background-color);

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    line-height: normal;
  }
`;
