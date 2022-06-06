import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";

export const Container = styled.div`
  padding: var(--gap) 0;
  background-color: var(--background-color);
  display: flex;
  flex: 1;

  div {
    margin: auto;
  }

  @media ${devices.desktop} {
    ${swapColor}
  }

  @media ${devices.mobile} {
    flex-direction: column;
    gap: var(--gap);
  }
`;
