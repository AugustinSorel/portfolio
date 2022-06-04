import { motion } from "framer-motion";
import styled from "styled-components";
import swapColor from "../../../styles/swapColor.styled";
import { extraSmallText, mediumText } from "../../../styles/texts.styled";

export const ListItem = styled(motion.li)`
  cursor: pointer;
  background-color: var(--background-color);
  padding: calc(var(--gap) * 8) 0;
`;

export const Article = styled.article``;

export const Title = styled.h2`
  ${mediumText}
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  gap: var(--gap);
`;

export const Category = styled.h3`
  ${extraSmallText}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  border: var(--border-height) solid var(--color);
  padding: var(--gap) calc(var(--gap) * 4);
  border-radius: calc(var(--border-radius) * 2);
`;

export const Date = styled.h3`
  ${extraSmallText}
  ${swapColor}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  border: var(--border-height) solid var(--color);
  padding: var(--gap) calc(var(--gap) * 5);
  border-radius: calc(var(--border-radius) * 2);
  background-color: var(--background-color);
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:first-child) {
    margin-top: 2%;
  }
`;
