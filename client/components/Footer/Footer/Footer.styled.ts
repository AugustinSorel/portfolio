import styled from "styled-components";
import devices from "../../../styles/devices";

export const Footer = styled.footer`
  display: flex;
  margin-top: var(--gap);

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  flex: 4;
  background-color: var(--background-color);
`;
