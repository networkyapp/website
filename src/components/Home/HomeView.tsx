import * as React from 'react';
import Contact from './Contact';
import Features from './Features';
import Hero from './Hero';
import { BigTitleWrapper, Container, Wrapper } from './HomeStyle';
import Section from './Section';
import { BigTitle } from './Section/SectionStyle';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Hero />
        <Section
          variant="light"
          title="Szybko wymień kontakty"
          imageSrc={'/assets/images/home-page/section-1-image.png'}
          bigTitle="Jak to działa?"
          iconSrc={'/assets/icons/people-contacts.svg'}
          description={
            <div style={{ maxWidth: '22rem' }}>
              Nie rozdawaj wizytówek, nie zapisuj maila w notatkach nie dodawaj
              na linkedInie. <span>Po prostu zbliż do siebie telefony</span>
            </div>
          }
        />
        <Section
          variant="dark"
          title="Zbuduj Network"
          description={
            <div style={{ maxWidth: '26rem' }}>
              Po zbliżeniu telefonów, profile automatycznie zapisują się w
              aplikacji - możesz je potem dzielić na grupy, filtrować i
              eksportować
            </div>
          }
          imageSrc={'/assets/images/home-page/section-2-image.png'}
          iconSrc={'/assets/icons/people-network.svg'}
        />
        <Section
          variant="light"
          title="Wykorzystaj kontakty"
          description={
            <div style={{ maxWidth: '22rem' }}>
              Nie zbieraj Pokémonów, wykorzystaj dodane kontakty i DZIAŁAJ!
            </div>
          }
          imageSrc={'/assets/images/home-page/section-3-image.png'}
          iconSrc={'/assets/icons/people-relations.svg'}
        />
        <Features />
        <BigTitleWrapper>
          <BigTitle showBigTitleUnderline={false}>Brzmi fajnie?</BigTitle>
        </BigTitleWrapper>
        <Contact />
      </Container>
    </Wrapper>
  );
};

export default Home;
