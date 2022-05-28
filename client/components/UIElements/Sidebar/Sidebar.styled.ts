import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.aside)`
  background-color: var(--background-color);
  width: max-content;
  height: 100%;
  border: var(--gap) solid var(--color);
  max-width: 100%;
`;
