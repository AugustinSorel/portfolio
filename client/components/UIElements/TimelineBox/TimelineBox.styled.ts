import styled from "styled-components";
import devices from "../../../styles/devices";
import {
  extraSmallText,
  mediumText,
  smallText,
} from "../../../styles/texts.styled";

export const Container = styled.div`
  position: relative;
  width: 50%;

  > * {
    padding-top: calc(var(--gap) * 2);
  }

  @media ${devices.mobile} {
    width: 90%;
  }

  &:nth-child(2n + 1) {
    left: 50%;
    padding-left: calc(var(--gap) * 4);

    @media ${devices.mobile} {
      left: 0;
      padding-left: calc(var(--gap) * 2);
    }
  }

  /* circle left */
  &::after {
    --circle-size: var(--font-size-extra-small);

    content: "";
    position: absolute;
    top: calc(var(--circle-size) * 2);
    right: calc(-1 * (var(--circle-size) / 2) - (var(--border-height) / 2));

    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    background-color: var(--color);
  }

  /* circle right */
  &:nth-child(2n + 1)::after {
    left: calc(-1 * (var(--circle-size) / 2) + (var(--border-height) / 2));

    @media ${devices.mobile} {
      right: calc(-1 * (var(--circle-size) / 2) - (var(--border-height) / 2));
      left: unset;
    }
  }
`;

export const Title = styled.h3`
  ${mediumText}
  text-transform: uppercase;
  font-weight: 500;
`;

export const Location = styled.h4`
  ${smallText}
  font-weight: var(--font-weight-regular);
  text-transform: capitalize;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  ${extraSmallText}
  list-style-position: inside;
`;

export const Date = styled.h5`
  ${smallText}
  font-weight: var(--font-weight-regular);
`;
