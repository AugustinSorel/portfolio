import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: #00000033;
  backdrop-filter: blur(5px);
  z-index: 1;
`;
