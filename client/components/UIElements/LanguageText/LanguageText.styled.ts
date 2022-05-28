import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const line = css`
  content: "";
  position: absolute;
  top: calc(50% - var(--border-height) / 2);
  background-color: var(--color);
  height: var(--border-height);
`;

type Props = {
  $isActive: boolean;
};

export const Text = styled(motion.h2)<Props>`
  text-align: center;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;

  &::before {
    ${line}
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
    top: calc(50% - var(--border-height) / 2);
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
