import styled from "styled-components";
import { motion } from "framer-motion";
import { mediumText, smallText } from "../../../styles/texts.styled";
import devices from "../../../styles/devices";

export const Button = styled(motion.button)`
  background-color: transparent;
  cursor: pointer;
  border: none;
  text-transform: inherit;

  ${mediumText}
  display: flex;

  @media ${devices.mobile} {
    ${smallText}
  }
`;
