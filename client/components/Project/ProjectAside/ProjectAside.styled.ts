import styled from "styled-components";

export const Aside = styled.aside`
  padding: calc(var(--gap) * 5) calc(var(--gap) * 2);
  flex: 1;

  > *:not(:first-child) {
    margin-top: 3vh;
  }

  > div:first-child {
    justify-content: center;
  }
`;
