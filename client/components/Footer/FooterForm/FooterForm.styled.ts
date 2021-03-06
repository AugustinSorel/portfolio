import styled from "styled-components";
import devices from "../../../styles/devices";
import { mediumText, smallText } from "../../../styles/texts.styled";

export const Container = styled.div`
  flex: 3;
  background-color: var(--background-color);

  display: flex;
  padding: calc(var(--gap) * 10) calc(var(--gap) * 5);
  gap: calc(var(--gap) * 10);
  overflow: hidden;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const Text = styled.h2`
  ${mediumText}
  white-space: nowrap;
  text-transform: capitalize;
  height: min-content;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  display: flex;
  align-items: center;
  margin: auto;

  @media ${devices.mobile} {
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
  }
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) * 7);
`;

export const ErrorText = styled.p`
  ${smallText}
  color: var(--error-color);
  flex: 1;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: calc(var(--gap) * 2) calc(var(--gap) * 5);
    text-transform: capitalize;
    margin-left: auto;
  }

  @media ${devices.mobile} {
    flex-direction: column;
    gap: calc(var(--gap) * 5);
  }
`;
