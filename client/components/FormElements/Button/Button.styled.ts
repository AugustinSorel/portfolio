import styled from "styled-components";
import { motion } from "framer-motion";
import { mediumText, smallText } from "../../../styles/texts.styled";
import devices from "../../../styles/devices";

type Props = {
  $inverted?: boolean;
};

export const Button = styled(motion.button)<Props>`
  ${mediumText}

  @media ${devices.mobile} {
    ${smallText}
  }

  cursor: pointer;
  border: none;
  text-transform: inherit;

  background-color: ${({ $inverted }) =>
    $inverted ? "var(--color)" : "transparent"};

  color: ${({ $inverted }) =>
    $inverted ? "var(--background-color)" : "var(--color)"};

  display: flex;
`;
