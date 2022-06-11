import { motion } from "framer-motion";
import styled from "styled-components";
import { inputShared } from "../../../styles/input.styled";

export const TextArea = styled(motion.textarea)`
  ${inputShared}

  resize: vertical;

  ::-webkit-scrollbar-track {
    background-color: var(--background-color);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color);
  }
`;
