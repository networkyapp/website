import { breakpoint } from '@theme/breakpoints';
import styled from 'styled-components';
import { spacingY } from './../../../utils/stylesUtils';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8.5rem 0;
  text-align: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 768px;
  width: 100%;
  align-items: flex-start;

  ${breakpoint('xs', 'md')`
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  `};
`;

export const CTAArrow = styled.img`
  filter: invert(1);
  margin: auto;
  display: block;

  ${breakpoint('md')`
    display: none;
  `};
`;

export const Element = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${spacingY(1.5)};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  height: 8.5rem;
  flex-shrink: 0;
  position: relative;

  &::before {
    content: '';
    background-image: url('assets/icons/vector-bg.svg');
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    filter: invert(6%) sepia(5%) saturate(7127%) hue-rotate(195deg)
      brightness(94%) contrast(89%);
    top: 0;
    left: 0;
    z-index: 0;
  }

  img {
    width: 4rem;
    z-index: 1;
  }

  ${breakpoint('xs', 'md')`
    width: 6rem;
    height: 6rem;

    img {
      width: 3rem;
    }
  `};
`;

export const Title = styled.div`
  font-size: 1.25rem;
  max-width: 11rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.primary.medium};
`;
