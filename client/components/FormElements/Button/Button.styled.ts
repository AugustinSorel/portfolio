import styled from "styled-components";
import { motion } from "framer-motion";
import { focusVisible } from "../../../styles/accessibility.styled";

export const Button = styled(motion.button)`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  text-transform: inherit;

  display: flex;

  ${focusVisible}
`;
