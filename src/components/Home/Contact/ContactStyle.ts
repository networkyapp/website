import { breakpoint } from '@theme/breakpoints';
import styled from 'styled-components';
import { spacingX, spacingY } from './../../../utils/stylesUtils';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8.5rem 0;
  background: url('/assets/images/home-page/bg-contact.jpg');
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    background: transparent
      linear-gradient(-90deg, #00000000 0%, #10121aac 38%, #181a27 100%) 0% 0%
      no-repeat padding-box;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${breakpoint('xs', 'md')`
    position: relative;
    background: url(/assets/images/home-page/bg-contact.jpg);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;

    &::before {
      content: "";
      background: linear-gradient(180deg,transparent 0%,#181a27 25%) 0% 0% no-repeat padding-box;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `};
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 2rem;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${({ theme }) => theme.colors.light};
  z-index: 2;

  ${breakpoint('xs', 'md')`
    align-items: center;
  `};
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 4rem;
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.fontWeight.primary.medium};
  max-width: 37rem;

  ${breakpoint('xs', 'md')`
    
    text-align: center;
    max-width: 22rem;
    font-size: 2.25rem;
  `};
`;

export const List = styled.ul`
  width: fit-content;
`;

export const ListElement = styled.li`
  max-width: 18rem;
  line-height: 2;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 27rem;
  align-items: flex-start;
  ${spacingY(1)}

  ${breakpoint('xs', 'md')`
    align-items: center;
    text-align: center;
    width: 100%;
  `};
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  background: rgba(83, 84, 104, 0.5);
  backdrop-filter: blur(30px);
  padding: 1rem;
  height: 52px;
  border: 0;
  border-radius: 0.75rem;
  line-height: 1;
  font-size: 1rem;
  color: #ffffff;
  width: 100%;

  &::placeholder {
    color: #d4d4e2;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: #ffffff;
  background: #d95d37;
  border-radius: 5rem;
  padding: 1rem 1.5rem;
  border: 0;
  width: auto;
  ${spacingX(0.75)};
  cursor: pointer;
  transform: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
  }

  &:disabled {
    filter: saturate(0);
  }

  img {
    width: 1em;
  }
`;
