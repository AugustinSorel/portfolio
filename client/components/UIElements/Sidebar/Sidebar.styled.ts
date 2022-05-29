import { motion } from "framer-motion";
import styled from "styled-components";
import devices from "../../../styles/devices";

export const Container = styled(motion.aside)`
  background-color: var(--background-color);
  width: max-content;
  height: 100%;
  border: var(--gap) solid var(--color);

  @media ${devices.mobile} {
    width: 100%;
  }
`;
