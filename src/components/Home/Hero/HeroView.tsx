import * as React from 'react';
import {
  Container,
  CTAIcon,
  PeopleImage,
  PeopleImageWrapper,
  PhonesImage,
  PhonesImageWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './HeroStyle';

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <PeopleImageWrapper>
        <PeopleImage
          src="/assets/images/home-page/people-desktop.png"
          className="desktop"
        />
        <PeopleImage
          src="/assets/images/home-page/people-mobile.png"
          className="mobile"
        />
      </PeopleImageWrapper>
      <Container>
        <Title>Networky</Title>
        <SubTitle>Nie zbieraj Pokémonów.</SubTitle>
      </Container>
      <PhonesImageWrapper>
        <PhonesImage src="/assets/images/home-page/phones.png" />
      </PhonesImageWrapper>
      <CTAIcon src="/assets/icons/cta-arrows.svg" />
    </Wrapper>
  );
};

export default Hero;
