import styled from "styled-components";
import { inputShared } from "../../../styles/input.styled";

export const TextArea = styled.textarea`
  ${inputShared}

  resize: vertical;

  ::-webkit-scrollbar-track {
    background-color: var(--background-color);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color);
  }
`;
