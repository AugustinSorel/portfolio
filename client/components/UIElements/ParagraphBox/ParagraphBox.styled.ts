import styled from "styled-components";
import devices from "../../../styles/devices";
import { smallText } from "../../../styles/texts.styled";

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.mobile} {
    gap: calc(var(--gap) * 2);
  }
`;

export const Paragraph = styled.p`
  ${smallText}
  text-align: center;
  font-weight: var(--font-weight-regular);

  @media ${devices.mobile} {
    text-align: left;
  }
`;
