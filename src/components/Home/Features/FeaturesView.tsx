import * as React from 'react';
import {
  Container,
  CTAArrow,
  Element,
  IconWrapper,
  Title,
  Wrapper,
} from './FeaturesStyle';

const Features: React.FC = () => {
  return (
    <>
      <CTAArrow src="/assets/icons/cta-arrows.svg" />
      <Wrapper>
        <Container>
          <Element>
            <IconWrapper>
              <img src="/assets/icons/people-contacts.svg" />
            </IconWrapper>
            <Title>Szybko wymień kontakty</Title>
          </Element>
          <Element>
            <IconWrapper>
              <img src="/assets/icons/people-network.svg" />
            </IconWrapper>
            <Title>Zbuduj Network</Title>
          </Element>
          <Element>
            <IconWrapper>
              <img src="/assets/icons/people-relations.svg" />
            </IconWrapper>
            <Title>Twórz prawdziwe relacje</Title>
          </Element>
        </Container>
      </Wrapper>
    </>
  );
};

export default Features;
