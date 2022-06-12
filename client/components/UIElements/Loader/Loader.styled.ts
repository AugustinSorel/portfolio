import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  border: var(--border-height) solid var(--color);
  border-top-color: var(--background-color);
  border-radius: 50%;
  margin: auto;
  margin-left: calc(var(--gap) * 5);
  height: 25px;
  aspect-ratio: 1;
`;
