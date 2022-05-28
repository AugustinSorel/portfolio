import { motion } from "framer-motion";
import styled from "styled-components";
import { largeText } from "../../../styles/texts.styled";

export const Container = styled(motion.aside)`
  background-color: var(--background-color);
  width: max-content;
  height: 100%;
  border: var(--gap) solid var(--color);
`;

export const Nav = styled.nav`
  padding: 10vh 0;
`;

export const List = styled.ul`
  list-style: none;
`;

type Props = {
  isActive: boolean;
};

export const ListItem = styled.li<Props>`
  &:not(:first-child) {
    margin-top: 5vh;
  }
  position: relative;
  padding: 0 10vw;

  &::before {
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    position: absolute;
    top: calc(50% - var(--gap) / 2);
    left: 0;
    right: 0;
    height: var(--gap);

    background-color: var(--color);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: calc(50% - var(--gap) / 2);
    left: 0;
    right: 0;
    height: var(--gap);

    background-color: var(--color);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const Anchor = styled.a`
  ${largeText}
  font-weight: var(--font-weight-bold);
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  background-color: var(--background-color);
  padding: 0 2vw;
`;
