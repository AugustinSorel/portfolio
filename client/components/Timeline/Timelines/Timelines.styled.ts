import styled from "styled-components";
import devices from "../../../styles/devices";

export const Container = styled.div`
  display: flex;
  margin-top: var(--gap);

  > * {
    background-color: var(--background-color);
    flex: 1;
  }

  @media ${devices.desktop} {
    flex-direction: column;
    margin-top: 0;
  }
`;
