import styled from "styled-components";

export const Aside = styled.aside`
  padding: calc(var(--gap) * 3) var(--gap);

  > *:not(:first-child) {
    margin-top: 10%;
  }
`;
