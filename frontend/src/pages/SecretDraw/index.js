import React, { useCallback, useEffect, useState } from 'react';
import { MdClear, MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  Container,
  Content,
  Main,
  Button,
  Form,
  FormRow,
  IconWrap,
} from './styles';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [people, setPeople] = useState([]);

  const loadPeople = useCallback(async () => {
    const response = await api.get('people');

    setPeople(response.data);
  }, []);

  useEffect(() => {
    loadPeople();
  }, [loadPeople]);
  const addNewPerson = useCallback(
    async (e) => {
      e.preventDefault();

      const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
      });

      const isValidPerson = await schema.isValid({ name, email });
      if (!isValidPerson) {
        return toast.error(
          'Erro ao adicionar uma pessoa, por favor confira seus dados e tente novamente',
        );
      }

      await api.post('/person', { name, email });

      loadPeople();
      setName('');
      setEmail('');
    },
    [name, email, loadPeople],
  );

  const deletePerson = useCallback(
    async (e, id) => {
      e.preventDefault();

      await api.delete(`/person/${id}`);

      loadPeople();
    },
    [loadPeople],
  );

  const handleDraw = useCallback(async () => {
    await api.post('/draw', {
      people: JSON.stringify(people),
    });
  }, [people]);

  return (
    <Container>
      <Content>
        <Header />

        <Main>
          <h1>Adicionar nomes</h1>

          <Form>
            <FormRow>
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  onCh
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <IconWrap>
                <button type="submit" onClick={addNewPerson}>
                  <MdDone size={20} color="green" />
                </button>
              </IconWrap>
            </FormRow>

            {people.map(person => (
              <FormRow key={person.id}>
                <div>
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    type="text"
                    value={person.name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    value={person.email}
                    type="email"
                    onCh
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <IconWrap onClick={(e) => deletePerson(e, person.id)}>
                  <MdClear size={20} color="#f4536a" />
                </IconWrap>
              </FormRow>
            ))}
          </Form>

          <Button onClick={handleDraw}>Sortear</Button>
        </Main>
      </Content>
    </Container>
  );
};
export default Home;
