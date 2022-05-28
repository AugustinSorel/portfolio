import styled from "styled-components";
import devices from "../../../styles/devices";
import { mediumText, smallText } from "../../../styles/texts.styled";

export const Container = styled.section`
  display: flex;
  gap: var(--gap);

  & > * {
    flex: 1;
  }

  * {
    ${mediumText}
  }

  svg {
    height: var(--font-size-medium);
    width: var(--font-size-medium);
  }

  @media ${devices.mobile} {
    * {
      ${smallText}
    }

    svg {
      height: var(--font-size-small);
      width: var(--font-size-small);
    }
  }
`;
