import styled from "styled-components";

export const Header = styled.header``;

export const TopContainer = styled.div`
  display: flex;
  gap: var(--gap);

  & > * {
    flex: 1;
    background-color: var(--background-color);
  }
`;

export const BottomContainer = styled.div`
  margin-top: var(--gap);

  display: grid;
  gap: var(--gap);
  grid-template-columns: auto 1fr;

  & > * {
    background-color: var(--background-color);
  }

  & > div {
    grid-row: span 2;
  }
`;

export const Box = styled.div``;

export const Title = styled.h1``;

export const Paragraph = styled.p`
  max-width: fit-content;
`;
