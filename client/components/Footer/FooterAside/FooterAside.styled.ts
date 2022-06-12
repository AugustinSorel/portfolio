import styled from "styled-components";
import devices from "../../../styles/devices";
import swapColor from "../../../styles/swapColor.styled";
import { extraSmallText, mediumText } from "../../../styles/texts.styled";

export const Aside = styled.aside`
  ${swapColor}
  flex: 1;
  color: var(--color);
  padding: calc(var(--gap) * 10) calc(var(--gap) * 5);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
`;

export const Anchor = styled.a`
  display: block;
  ${mediumText}
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  width: min-content;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: var(--border-height);
    background-color: var(--color);
    transition: width 0.25s ease-in-out;
  }

  :hover::after {
    width: 100%;
  }
`;

export const Copyright = styled.p`
  ${extraSmallText}
  font-weight: var(--font-weight-bold);
  margin-top: auto;

  @media ${devices.mobile} {
    text-align: center;
  }
`;
