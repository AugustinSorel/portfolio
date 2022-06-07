import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const List = styled.ul`
  margin-top: calc(var(--gap) * 3);
`;

export const ListItem = styled.li`
  list-style-position: inside;
  ${mediumText}
  text-transform: capitalize;
`;
