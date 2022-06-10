import styled from 'styled-components';
import devices from '../../../styles/devices';
import { mediumText } from '../../../styles/texts.styled';

export const Container = styled.div`
  flex: 4;
  background-color: var(--background-color);

  display: flex;
  padding: calc(var(--gap) * 10) calc(var(--gap) * 5);
  gap: calc(var(--gap) * 10);

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
  gap: calc(var(--gap) * 5);

  button {
    align-self: flex-end;
    padding: calc(var(--gap) * 2);
    text-transform: capitalize;
  }
`;
