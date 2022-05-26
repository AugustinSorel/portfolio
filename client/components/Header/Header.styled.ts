import styled from "styled-components";
import devices from "../../styles/devices";
import {
  ExtraLargeText,
  MediumText,
  SmallText,
} from "../../styles/texts.styled";

export const Header = styled.header``;

export const TopContainer = styled.div`
  display: flex;
  gap: var(--gap);

  & > * {
    flex: 1;
    background-color: var(--background-color);
  }
`;

export const BottomContainer = styled.div`
  margin-top: var(--gap);

  display: grid;
  gap: var(--gap);
  grid-template-columns: auto 1fr;

  & > * {
    background-color: var(--background-color);
  }

  & > div {
    grid-row: span 2;

    display: flex;
    align-items: center;
    text-align: center;
    ${MediumText}
  }

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div``;

export const Title = styled.h1`
  ${ExtraLargeText}
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  line-height: calc(9vw * 0.55);
  user-select: none;

  @media ${devices.mobile} {
    line-height: normal;
  }
`;

export const ParagraphContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Paragraph = styled.p`
  ${SmallText}
  text-align: center;
`;

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
`;
