import { motion } from "framer-motion";
import styled from "styled-components";
import { smallText } from "../../../styles/texts.styled";

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style: none;
`;

export const Text = styled(motion.h4)`
  ${smallText}
  text-align: center;
  text-transform: capitalize;
`;
