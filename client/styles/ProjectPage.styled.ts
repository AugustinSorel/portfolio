import styled from "styled-components";
import devices from "./devices";

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

export const Description = styled.p``;

export const Article = styled.article`
  flex: 1;
`;
