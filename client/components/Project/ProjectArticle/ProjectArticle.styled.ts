import styled from "styled-components";
import { largeText, mediumText } from "../../../styles/texts.styled";

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
