import styled from "styled-components";
import devices from "../../../styles/devices";

export const Section = styled.section`
  margin-top: var(--gap);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: var(--gap);

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
