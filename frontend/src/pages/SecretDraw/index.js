import React, { useCallback, useEffect, useState, useRef } from 'react';
import { MdClear, MdDone, MdCreate } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
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
  Card,
} from './styles';

const Home = () => {
  const inputEl = useRef(null);

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const [people, setPeople] = useState([]);

  const loadPeople = useCallback(async () => {
    const response = await api.get('people');

    setPeople(response.data);
  }, []);

  useEffect(() => {
    loadPeople();
  }, [loadPeople]);
  const addNewPerson = useCallback(
    async e => {
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

      return inputEl.current.focus();
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
    setLoading(true);

    if (people.length < 5) {
      setLoading(false);
      return toast.error(
        'Você precisa de no mínimo 5 pessoas para fazer o sorteio',
      );
    }

    await api.post('/draw', {
      people: JSON.stringify(people),
    });

    setLoading(false);

    toast.success(
      'Sorteio realizado com sucesso, um e-mail foi enviado para cada integrante informando seu amigo secreto !',
    );

    return setTimeout(() => history.push('/'), 6000);
  }, [people, history]);

  return (
    <Container>
      <Content>
        <Header />

        <Main>
          <Form>
            <h1>Adicionar nomes</h1>

            <FormRow>
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  ref={inputEl}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <IconWrap success>
                <button type="submit" onClick={addNewPerson}>
                  <MdDone size={20} color="green" />
                </button>
              </IconWrap>
            </FormRow>

            {people.map(person => (
              <FormRow key={person.id}>
                <Card>
                  <p>
                    <strong>Nome:</strong>

                    {person.name}
                  </p>
                  <p>
                    <strong>email:</strong>

                    {person.email}
                  </p>

                  <div>
                    <IconWrap
                      onClick={() => history.push(`/edit-person/${person.id}`)}
                      edit
                    >
                      <MdCreate size={20} color="#666" />
                    </IconWrap>

                    <IconWrap onClick={e => deletePerson(e, person.id)} error>
                      <MdClear size={20} color="#f4536a" />
                    </IconWrap>
                  </div>
                </Card>
              </FormRow>
            ))}
            <Button onClick={handleDraw}>
              {loading ? 'Carregando...' : 'Sortear'}
            </Button>
          </Form>
        </Main>
      </Content>
    </Container>
  );
};
export default Home;
