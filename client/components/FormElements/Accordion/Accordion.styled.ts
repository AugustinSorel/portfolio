import { motion } from "framer-motion";
import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const Container = styled.div`
  background-color: var(--background-color);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: calc(var(--gap) * 2) var(--gap);
  justify-content: space-between;

  svg {
    width: var(--font-size-medium);
    height: var(--font-size-medium);
  }
`;

export const Title = styled.h2`
  ${mediumText}
  text-transform: capitalize;
`;

export const SvgIconContainer = styled(motion.div)`
  display: flex;
`;
