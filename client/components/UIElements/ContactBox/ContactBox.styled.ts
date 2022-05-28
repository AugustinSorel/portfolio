import styled from "styled-components";
import swapColor from "../../../styles/swapColor.styled";

export const Container = styled.div`
  ${swapColor}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;
