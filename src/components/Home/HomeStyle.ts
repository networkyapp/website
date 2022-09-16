import { breakpoint } from '@theme/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const BigTitleWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 4.5rem;

  ${breakpoint('xs', 'md')`
        margin-bottom: 2rem;
    `};
`;
