import styled from "styled-components";
import { smallText } from "../../../styles/texts.styled";

export const Text = styled.h2`
  ${smallText}
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  margin-top: calc(var(--gap) * 5);
  margin-bottom: calc(var(--gap) * 2);
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background-color: var(--color);
    left: 0;
    bottom: 0;
    height: var(--border-height);
    width: 100px;
  }
`;
