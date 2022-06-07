import { motion } from "framer-motion";
import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const ListItem = styled(motion.li)`
  cursor: pointer;
  background-color: var(--background-color);
  padding: calc(var(--gap) * 5) 0;

  :last-child {
    grid-column: 1 / 3;
  }
`;

export const Article = styled.article`
  height: 100%;
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 2%;
  }
`;

export const Title = styled(motion.h2)`
  ${mediumText}
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
`;
