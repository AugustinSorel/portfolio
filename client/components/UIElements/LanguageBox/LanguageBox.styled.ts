import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
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
