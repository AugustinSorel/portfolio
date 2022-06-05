import styled from "styled-components";

export const Aside = styled.aside`
  padding: calc(var(--gap) * 5) calc(var(--gap) * 3);

  > *:not(:first-child) {
    margin-top: 3vh;
  }

  > div:first-child {
    justify-content: center;
  }
`;
