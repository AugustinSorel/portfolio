import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import devices from "../../../styles/devices";
import SwapColor from "../../../styles/SwapColor.styled";
import { MediumText, SmallText } from "../../../styles/texts.styled";

export const Container = styled.section`
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
  $isActive: boolean;
}

const line = css`
  content: "";
  position: absolute;
  top: calc(50% - var(--line-height) / 2);
  background-color: var(--color);
  height: var(--line-height);
`;

export const LanguageText = styled(motion.h2)<LanguageProps>`
  text-align: center;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  --line-height: 4px;

  &::before {
    ${line}
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
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
