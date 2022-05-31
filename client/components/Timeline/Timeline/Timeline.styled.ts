import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";
import { largeText } from "../../../styles/texts.styled";

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: var(--background-color);

  > * {
    padding-left: calc(var(--gap) * 2);
    margin: calc(var(--gap) * 2) 0;
  }

  &:first-child {
    ${swapColor}
  }

  /* the time line */
  &::before {
    content: "";
    position: absolute;
    width: var(--gap);
    background-color: var(--color);
    height: 100%;
    left: 50%;

    @media ${devices.mobile} {
      left: 90%;
    }
  }

  /* make the time lines take the full width */
  @media ${devices.desktop} {
    flex: 0 1 100%;
  }
`;

export const Title = styled.h2`
  ${largeText}
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  position: relative;
  background-color: var(--background-color);
  width: min-content;
`;
