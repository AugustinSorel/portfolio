import styled from "styled-components";
import devices from "../../../styles/devices";

export const Footer = styled.footer`
  display: flex;
  margin-top: var(--gap);
  gap: var(--gap);

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
