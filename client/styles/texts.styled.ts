import { css } from "styled-components";
import devices from "./devices";

export const ExtraLargeText = css`
  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-bold);

  @media ${devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizesMobile.extraLarge};
  }
`;

export const LargeText = css`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);

  @media ${devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizesMobile.large};
  }
`;

export const MediumText = css`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);

  @media ${devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizesMobile.medium};
  }
`;

export const SmallText = css`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);

  @media ${devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizesMobile.small};
  }
`;

export const ExtraSmallText = css`
  font-size: var(--font-size-extra-small);
  font-weight: var(--font-weight-light);

  @media ${devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizesMobile.extraSmall};
  }
`;
