import { motion } from "framer-motion";
import styled from "styled-components";

export const List = styled(motion.ul)`
  flex: 1;
  display: flex;
  gap: var(--gap);
  list-style: none;
  flex-direction: column;

  & > *:last-child {
    height: 100%;
  }
`;
