import styled, { css } from "styled-components";
import SwapColor from "../../styles/SwapColor.styled";
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

  svg {
    height: var(--font-size-medium);
    width: var(--font-size-medium);
  }

  * {
    ${MediumText}

    @media ${devices.mobile} {
      ${SmallText}

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

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
`;

export const LanguageSeparator = styled.span``;

interface LanguageProps {
  isActive: boolean;
}

const line = css`
  content: "";
  position: absolute;
  top: calc(50% - var(--line-height) / 2);
  background-color: var(--color);
  height: var(--line-height);
`;

export const LanguageText = styled.h2<LanguageProps>`
  text-align: center;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  --line-height: 4px;

  &::before {
    ${line}
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    top: calc(50% - var(--line-height) / 2);
    width: 100%;
  }

  &::after {
    ${line}
    left: 0;
    width: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ContactContainer = styled.div`
  ${SwapColor}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactText = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuText = styled.h2`
  text-transform: capitalize;
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

  @media ${devices.mobile} {
    gap: calc(var(--gap) * 2);
  }
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
  ${SwapColor}
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: capitalize;
`;

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
`;
