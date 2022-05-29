import styled, { css } from "styled-components";
import devices from "../../../styles/devices";
import { largeText, mediumText, smallText } from "../../../styles/texts.styled";

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 5vh;
  }
`;

type Props = {
  isActive: boolean;
};

const line = css`
  content: "";
  position: absolute;
  top: calc(50% - var(--gap) / 2);
  left: 0;
  right: 0;
  z-index: -1;
  height: var(--gap);
  background-color: var(--color);
`;

export const Anchor = styled.a<Props>`
  background-color: var(--background-color);
  padding: 0 10vw;
  text-decoration: none;
  color: inherit;

  display: inline-block;
  width: 100%;
  position: relative;
  z-index: 0;

  &::after {
    ${line};
    display: ${({ isActive }) => (isActive ? "block" : "none")};
  }

  &::before {
    ${line};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  ${largeText}
  background-color: var(--background-color);
  font-weight: var(--font-weight-bold);
  width: min-content;
  text-transform: uppercase;
  padding: 0 2vw;

  @media ${devices.mobile} {
    ${mediumText}
    font-weight: var(--font-weight-bold);
  }
`;
