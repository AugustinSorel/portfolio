import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import devices from "../../../styles/devices";
import {
  extraSmallText,
  largeText,
  mediumText,
  smallText,
} from "../../../styles/texts.styled";

export const Article = styled.article`
  flex: 1;
  padding: calc(var(--gap) * 5) calc(var(--gap) * 3);
`;

export const Title = styled.h1`
  ${largeText}
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  text-align: center;
`;

export const SmallText = styled.h3`
  ${smallText}
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  margin-top: calc(var(--gap) * 5);
  margin-bottom: calc(var(--gap) * 2);
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background-color: var(--color);
    left: 0;
    bottom: 0;
    height: var(--border-height);
    width: 100px;
  }
`;

export const Description = styled.p`
  ${smallText}
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style-position: inside;
  ${smallText}
  text-transform: capitalize;
`;

export const Container = styled.div`
  user-select: none;
  overflow: hidden;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: min(600px, 50vw);
  /* aspect-ratio: 1/1; */

  margin: 0 auto;
  margin-top: calc(var(--gap) * 5);
`;

const buttonShared = css`
  top: calc(50% - var(--font-size-small) / 2);
  position: absolute;
  background: var(--background-color);
  border-radius: 50%;
  padding: var(--gap);
  cursor: pointer;
  z-index: 2;

  svg {
    width: var(--font-size-small);
    height: var(--font-size-small);
  }
`;

export const PreviousButton = styled.div`
  ${buttonShared}
  left: var(--gap);
`;

export const NextButton = styled.div`
  ${buttonShared}
  right: var(--gap);
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const ListTwo = styled.ul``;

export const ListItemTwo = styled.li`
  ${smallText} /* margin-left: calc(var(--gap) *4); */
  list-style-position: inside;
`;

export const TextTwo = styled.h2`
  ${smallText}
  text-transform: capitalize;
`;
