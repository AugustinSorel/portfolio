import { motion } from "framer-motion";
import styled from "styled-components";

export const List = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  gap: var(--gap);
`;
