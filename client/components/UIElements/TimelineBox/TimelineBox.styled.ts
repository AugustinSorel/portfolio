import styled from "styled-components";
import devices from "../../../styles/devices";
import { largeText, mediumText, smallText } from "../../../styles/texts.styled";

export const Container = styled.div`
  position: relative;
  width: 50%;

  > * {
    padding-top: 0.5rem;
  }

  &:nth-child(2n + 1) {
    left: 50%;
    padding-left: 4%;
  }

  /* circle left */
  &::after {
    --cirlce-size: 25px;

    @media ${devices.mobile} {
      --cirlce-size: 15px;
      top: calc(var(--font-size-medium) / 2);
    }

    content: "";
    position: absolute;
    top: calc(var(--font-size-large) / 2 + var(--cirlce-size) / 2);
    right: calc(-1 * (var(--cirlce-size) / 2) - (var(--border-height) / 2));

    width: var(--cirlce-size);
    height: var(--cirlce-size);
    border-radius: 50%;
    background-color: var(--color);
  }

  /* circle right */
  &:nth-child(2n + 1)::after {
    left: calc(-1 * (var(--cirlce-size) / 2) + (var(--border-height) / 2));
  }
`;

export const Title = styled.h3`
  ${largeText}
  text-transform: uppercase;
  font-weight: 500;

  @media ${devices.mobile} {
    ${smallText}
    font-weight: var(--font-weight-regular);
  }
`;

export const Location = styled.h4`
  ${smallText}
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;

  @media ${devices.desktop} {
    ${mediumText}
  }

  @media ${devices.mobile} {
    font-size: 4vw;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  color: var(--color);
  font-size: 40%;
  font-weight: var(--font-weight-light);
  list-style-position: inside;

  @media ${devices.desktop} {
    font-size: 75%;
  }

  @media ${devices.mobile} {
    font-size: 2.5vw;
  }
`;

export const Date = styled.h5`
  ${smallText}
  font-weight: var(--font-weight-regular);

  @media ${devices.desktop} {
    ${mediumText}
  }

  @media ${devices.mobile} {
    font-size: 4vw;
  }
`;
