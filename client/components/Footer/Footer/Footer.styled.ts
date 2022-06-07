import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";

export const Footer = styled.footer`
  display: flex;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  ${swapColor}
  flex: 1;
  color: var(--color);
`;

export const Form = styled.form`
  flex: 3;
  background-color: var(--background-color);
`;
