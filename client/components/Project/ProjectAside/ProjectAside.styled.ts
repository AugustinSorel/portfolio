import styled from "styled-components";

export const Aside = styled.aside`
  padding: calc(var(--gap) * 3) var(--gap);

  > *:not(:first-child) {
    margin-top: calc(var(--gap) * 3);
  }

  > div:first-child {
    justify-content: center;
  }
`;
