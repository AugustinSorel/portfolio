import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  gap: var(--gap);
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  gap: var(--gap);
  list-style: none;
  flex-direction: column;

  & > *:last-child {
    height: 100%;
  }
`;
