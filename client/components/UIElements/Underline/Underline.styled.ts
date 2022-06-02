import { motion } from "framer-motion";
import styled from "styled-components";

export const Underline = styled(motion.div)`
  position: absolute;
  top: calc(50% - var(--border-height) / 2);
  background-color: var(--color);
  height: var(--border-height);
  pointer-events: none;
`;
