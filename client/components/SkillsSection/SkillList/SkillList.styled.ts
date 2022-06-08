import styled from "styled-components";
import { smallText } from "../../../styles/texts.styled";

export const List = styled.ul`
  margin-top: calc(var(--gap) * 3);
`;

export const ListItem = styled.li`
  ${smallText}
  list-style: none;
  margin-left: calc(var(--gap) * 3);
  text-transform: capitalize;

  :not(:first-child) {
    margin-top: calc(var(--gap));
  }
`;
