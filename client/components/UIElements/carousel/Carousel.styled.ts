import { motion } from "framer-motion";
import styled, { css } from "styled-components";

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
  /* width: 100%; */
  height: 100%;

  /* object-fit: contain; */
  width: min-content;
`;
