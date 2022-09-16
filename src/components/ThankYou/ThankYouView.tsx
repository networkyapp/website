import Link from 'next/link';
import * as React from 'react';
import { Button, Container, SubTitle, Title, Wrapper } from './ThankYouStyle';

const ThankYou: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Dzięki!</Title>
        <SubTitle>
          Od teraz będziesz z Networky na bieżąco. Wkrótce się z Tobą
          skontaktujemy!
        </SubTitle>
        <Link passHref href="/">
          <Button as="a">
            <span>Strona główna</span>
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default ThankYou;
