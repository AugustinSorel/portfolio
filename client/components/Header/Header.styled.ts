import styled from "styled-components";
import devices from "../../styles/devices";
import {
  ExtraLargeText,
  MediumText,
  SmallText,
} from "../../styles/texts.styled";

export const Header = styled.header``;

export const TopSection = styled.section`
  display: flex;
  gap: var(--gap);

  & > * {
    flex: 1;
    background-color: var(--background-color);
  }
`;

export const Box = styled.div``;

export const BottomSection = styled.section`
  margin-top: var(--gap);

  display: grid;
  gap: var(--gap);
  grid-template-columns: auto 1fr;

  & > * {
    background-color: var(--background-color);
  }

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  ${ExtraLargeText}
  text-transform: uppercase;
  line-height: calc(var(--font-size-extra-large) * 0.55);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    line-height: normal;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Paragraph = styled.p`
  ${SmallText}
  text-align: center;
  font-weight: var(--font-weight-regular);

  @media ${devices.mobile} {
    text-align: left;
  }
`;

export const Subtitle = styled.h2`
  ${MediumText}
  color: var(--background-color);
  background-color: var(--color);
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: capitalize;
`;

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
`;
