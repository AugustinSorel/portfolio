import styled from "styled-components";
import { mediumText } from "../../../styles/texts.styled";

export const Container = styled.div`
  flex: 4;
  background-color: var(--background-color);

  display: flex;
`;

export const Text = styled.h2`
  ${mediumText}
  color: red;
  white-space: nowrap;
`;

export const Form = styled.form`
  flex: 1;
`;
