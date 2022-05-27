import styled from "styled-components";
import devices from "../../../styles/devices";
import { mediumText, smallText } from "../../../styles/texts.styled";

export const Container = styled.section`
  display: flex;
  gap: var(--gap);

  svg {
    height: var(--font-size-medium);
    width: var(--font-size-medium);
  }

  * {
    ${mediumText}

    @media ${devices.mobile} {
      ${smallText}

      svg {
        height: var(--font-size-small);
        width: var(--font-size-small);
      }
    }
  }

  & > * {
    flex: 1;
    background-color: var(--background-color);
  }
`;
