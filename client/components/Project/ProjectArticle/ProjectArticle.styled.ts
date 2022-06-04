import styled from "styled-components";
import devices from "../../../styles/devices";
import { largeText, mediumText, smallText } from "../../../styles/texts.styled";

export const Article = styled.article`
  flex: 1;
  padding: calc(var(--gap) * 5) calc(var(--gap) * 3);

  > *:not(:first-child) {
    margin-top: calc(var(--gap) * 5);
  }
`;

export const Title = styled.h1`
  ${largeText}
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  text-align: center;
`;

export const Description = styled.p`
  ${mediumText}
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${devices.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const Text = styled.h2`
  ${smallText}
  text-align:center
`;
