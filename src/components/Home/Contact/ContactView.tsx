import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  List,
  ListElement,
  Title,
  Wrapper,
} from './ContactStyle';

const Contact: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm((v) => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch('/api/send', {
      body: JSON.stringify(form),
      method: 'POST',
    })
      .then(() => {
        router.push({
          pathname: '/thank-you',
          query: form,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      <Container>
        <Title>Wejdź za kulisy projektu Networky</Title>
        <List>
          <ListElement>
            Pomóż nam podjąć decyzje co do wyglądu i funkcjonalności aplikacji
          </ListElement>
          <ListElement>Proponuj nowe rozwiązania</ListElement>
          <ListElement>Testuj pierwsze wersje</ListElement>
          <ListElement>Zostań ambasadorem Networky</ListElement>
        </List>
        <Form onSubmit={handleSubmit}>
          <Input
            value={form.name}
            onChange={handleChange}
            name="name"
            placeholder="Twoje imię"
            required
          />
          <Input
            value={form.email}
            onChange={handleChange}
            name="email"
            placeholder="Twój adres-email"
            required
          />
          <Button type="submit" disabled={loading}>
            <span>Dołącz do Networky</span>
            <img src="/assets/icons/arrow-right.svg" />
          </Button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Contact;
