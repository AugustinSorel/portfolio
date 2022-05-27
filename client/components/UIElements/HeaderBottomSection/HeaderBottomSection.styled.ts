import styled from "styled-components";
import devices from "../../../styles/devices";

export const Container = styled.section`
  margin-top: var(--gap);

  display: grid;
  gap: var(--gap);
  grid-template-columns: auto 1fr;

  & > * {
    background-color: var(--background-color);
  }

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
`;
