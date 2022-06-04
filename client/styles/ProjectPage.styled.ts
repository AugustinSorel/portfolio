import styled from "styled-components";
import devices from "./devices";
import swapColor from "./swapColor.styled";
import { extraSmallText, smallText } from "./texts.styled";

export const Main = styled.main`
  margin-top: var(--gap);
  height: 100%;
  display: flex;
  gap: var(--gap);

  > * {
    background-color: var(--background-color);
  }

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  padding: calc(var(--gap) * 3) var(--gap);

  > *:not(:first-child) {
    margin-top: 10%;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: var(--gap);
`;

export const Category = styled.h2`
  ${extraSmallText}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  border: var(--border-height) solid var(--color);
  padding: var(--gap) calc(var(--gap) * 4);
  border-radius: calc(var(--border-radius) * 2);
`;

export const Date = styled.h2`
  ${extraSmallText}
  ${swapColor}
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
  border: var(--border-height) solid var(--background-color);
  padding: var(--gap) calc(var(--gap) * 4);
  border-radius: calc(var(--border-radius) * 2);
  background-color: var(--background-color);
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const Tech = styled.h2`
  ${smallText}
  text-transform: capitalize;
`;

export const ListTwo = styled.ul`
  display: flex;
`;

export const Anchor = styled.a`
  margin: 0 auto;
  line-height: 0;

  svg {
    height: var(--font-size-medium);
    width: var(--font-size-medium);
  }
`;

export const Description = styled.p``;

export const Article = styled.article`
  flex: 1;
`;
