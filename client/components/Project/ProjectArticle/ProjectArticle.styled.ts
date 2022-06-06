import styled from "styled-components";
import { largeText, smallText } from "../../../styles/texts.styled";

export const Article = styled.article`
  flex: 1;
  padding: calc(var(--gap) * 5) calc(var(--gap) * 3);
`;

export const Title = styled.h2`
  ${largeText}
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  text-align: center;
`;

export const Description = styled.p`
  ${smallText}
`;
