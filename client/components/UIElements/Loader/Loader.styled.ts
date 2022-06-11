import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  border: var(--border-height) solid var(--color);
  border-top-color: var(--background-color);
  border-radius: 50%;
  margin: auto calc(var(--gap) * 2);
  height: 50%;
  aspect-ratio: 1;
`;
