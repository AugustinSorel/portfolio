import styled from "styled-components";
import swapColor from "../../../styles/swapColor.styled";
import {
  extraSmallText,
  largeText,
  mediumText,
  smallText,
} from "../../../styles/texts.styled";

export const Section = styled.section`
  position: relative;

  &:first-child {
    ${swapColor}
  }

  &::before {
    content: "";
    position: absolute;
    width: var(--border-height);
    background-color: var(--color);
    top: 0;
    bottom: 0;
    left: 50%;
  }
`;

export const Title = styled.h2`
  ${largeText}
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  position: relative;
`;

export const Box = styled.div`
  position: relative;
  width: 50%;

  &:nth-child(2n + 1) {
    left: 50%;
  }

  & > *:not(:first-child) {
    /* margin-top: calc(var(--gap) * 2); */
  }

  /* circle left */
  &::after {
    --cirlce-size: 25px;
    content: "";
    position: absolute;
    top: 0;
    right: calc(-1 * (var(--cirlce-size) / 2) - (var(--border-height) / 2));

    width: var(--cirlce-size);
    height: var(--cirlce-size);
    border-radius: 50%;
    background-color: var(--color);
  }

  /* circle right */
  &:nth-child(2n + 1)::after {
    left: calc(-1 * (var(--cirlce-size) / 2) + (var(--border-height) / 2));
  }
`;

export const BoxTitle = styled.h3`
  ${mediumText}
  text-transform: uppercase;
`;

export const BoxLocation = styled.h4`
  ${mediumText}
  text-transform: capitalize;
`;

export const BoxText = styled.p`
  ${smallText}
`;

export const BoxDate = styled.h5`
  ${smallText}
`;
