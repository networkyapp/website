import { breakpoint } from '@theme/breakpoints';
import styled, { css } from 'styled-components';
import { spacingY } from './../../../utils/stylesUtils';

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  position: relative;

  &::before {
    content: '';
    background-image: url('assets/icons/vector-bg.svg');
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  img {
    width: 2rem;
    z-index: 1;
  }

  ${breakpoint('xs', 'md')`
      margin: auto;
      margin-top: 2rem;
  `};
`;

export const Image = styled.img`
  width: 50%;
  height: auto;

  ${breakpoint('xs', 'md')`
      width: 100%;
  `};
`;

export const Wrapper = styled.div<{ variant: 'light' | 'dark' }>`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  padding-bottom: 0;
  width: 100%;

  ${breakpoint('xs', 'md')`
      padding: 3rem;
  `};

  background: ${({ theme, variant }) =>
    variant === 'light' ? theme.colors.light : '#181A27'};

  ${IconWrapper} {
    &::before {
      filter: ${({ variant }) =>
        variant === 'light'
          ? `invert(6%) sepia(5%) saturate(7127%) hue-rotate(195deg) brightness(94%) contrast(89%)`
          : 'invert(100%) sepia(0%) saturate(9%) hue-rotate(247deg) brightness(114%) contrast(100%)'};
    }

    ${({ variant }) =>
      variant === 'dark' &&
      css`
        margin-left: auto;
        img {
          filter: invert(1);
        }
      `};
  }

  ${Image} {
    ${({ variant }) =>
      variant === 'dark'
        ? css`
            ${breakpoint('md')`margin-left: -6%;`}
          `
        : css`
            ${breakpoint('md')`margin-right: -6%;`}
          `};
  }
`;

export const Container = styled.div<{ variant: 'light' | 'dark' }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ variant }) =>
    variant === 'light' ? 'row' : 'row-reverse'};
  ${spacingY(1.5)};
  max-width: 768px;
  margin: auto;

  ${breakpoint('xs', 'md')`
      flex-direction: column-reverse;
      text-align: center;
      justify-content: center;
  `};
`;

export const Inner = styled.div<{ variant: 'light' | 'dark' }>`
  display: flex;
  color: ${({ theme, variant }) =>
    theme.colors[variant === 'light' ? 'black' : 'light']};
  flex-direction: column;
  text-align: ${({ variant }) => (variant === 'light' ? 'left' : 'right')};

  ${breakpoint('xs', 'md')`
      width: 100%;
      text-align: center;
  `};
`;

export const BigTitle = styled.h3<{ showBigTitleUnderline?: boolean }>`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.medium};
  position: relative;
  display: inline;
  margin: auto;
  margin-bottom: 3.5rem;

  ${({ showBigTitleUnderline = true }) =>
    showBigTitleUnderline &&
    css`
      &::after {
        content: '';
        background: url('/assets/icons/section-underline.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 8px;
        top: calc(100% - 0.5rem);
        left: 0;
        position: absolute;
      }
    `}

  ${breakpoint('xs', 'md')`
      font-size: 1.5rem;
  `};
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.semiBold};
`;

export const Description = styled.div`
  font-size: 1.125rem;
  margin: 0;
  margin-top: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};

  span {
    display: flex;
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.primary.semiBold};
  }

  ${breakpoint('xs', 'md')`
    & > div, span {
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  `};
`;
