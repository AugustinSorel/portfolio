import { motion } from "framer-motion";
import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const Container = styled.div`
  background-color: var(--background-color);
  padding: calc(var(--gap) * 2);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;

  svg {
    width: var(--font-size-medium);
    height: var(--font-size-medium);
  }
`;

export const Title = styled.h2<{ isOpen: boolean }>`
  ${mediumText}
  font-weight: 500;
  text-transform: capitalize;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: var(--border-height);
    background-color: var(--color);
    width: ${({ isOpen }) => (isOpen ? "60%" : "0")};

    transition: width 0.25s ease-in-out;
  }
`;

export const SvgIconContainer = styled(motion.div)`
  display: flex;
`;

export const ContentContainer = styled(motion.div)`
  overflow: hidden;
`;
