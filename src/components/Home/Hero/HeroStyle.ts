import { breakpoint } from '@theme/breakpoints';
import styled from 'styled-components';
import { spacingY } from './../../../utils/stylesUtils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 48rem;
  background: transparent
    radial-gradient(closest-side at 50% 50%, #191b29 0%, #10111a 100%) 0% 0%
    no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
  flex-direction: column;
  text-align: center;
  ${spacingY(2.5)};
  position: relative;

  ${breakpoint('xs', 'md')`
      ${spacingY(3.5)};
  `};
`;

export const Inner = styled.div``;

export const Title = styled.h1`
  font-size: 6.5rem;
  margin-bottom: -1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.medium};

  ${breakpoint('xs', 'md')`
      font-size: 3.5rem;
      margin-bottom: -0.75rem;
  `};
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};

  ${breakpoint('xs', 'md')`
      font-size: 1.5rem;
  `};
`;

export const PhonesImageWrapper = styled.div`
  width: 1562px;

  ${breakpoint('xs', 'md')`
      width: 800px;
  `};
`;

export const PhonesImage = styled.img`
  width: 100%;
  max-width: 1562px;
  width: 100%;
`;

export const PeopleImageWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;

  ${breakpoint('xs', 'md')`
    height: 33%;
  `};

  img {
    width: 50%;

    ${breakpoint('xs', 'md')`
      width: 100%;
    `};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        #10111a 18%,
        #10111a7a 68%,
        #10111a00 100%
      )
      0% 0% no-repeat padding-box;
  }
`;

export const PeopleImage = styled.img`
  display: none;
  object-fit: contain;

  &.mobile {
    ${breakpoint('xs', 'md')`
      display: block;
    `};
  }

  &.desktop {
    ${breakpoint('md')`
      display: block;
    `};
  }
`;

export const CTAIcon = styled.img`
  position: absolute;
  bottom: 2.5rem;

  ${breakpoint('xs', 'md')`
      height: 2rem;
      width: auto;
      bottom: 5rem;
  `};
`;
