import { motion } from "framer-motion";
import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const Container = styled.div`
  background-color: var(--background-color);
  padding: calc(var(--gap) * 2);
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) * 3);
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

export const Title = styled.h2`
  ${mediumText}
  font-weight: 500;
  text-transform: capitalize;
`;

export const SvgIconContainer = styled(motion.div)`
  display: flex;
`;
