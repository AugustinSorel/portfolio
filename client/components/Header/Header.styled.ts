import styled from "styled-components";
import changeColor from "../../styles/changeColor.styled";
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

export const LanguageContainer = styled.div``;

export const LanguageText = styled.h2`
  ${MediumText};
  text-align: center;
`;

export const ContactContainer = styled.div`
  ${changeColor}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactText = styled.h2`
  ${MediumText}
  text-align: center;
  text-transform: capitalize;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuText = styled.h2`
  ${MediumText}
  display: flex;
  align-items: center;
`;

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
  ${changeColor}
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: capitalize;
`;

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
`;
