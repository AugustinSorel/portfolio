import styled from "styled-components";
import devices from "../../../styles/devices";

export const Section = styled.section`
  margin-top: var(--gap);

  width: 100%;
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(2, 1fr);

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;
