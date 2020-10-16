import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
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
  GobackButton,
} from './styles';

const Home = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get(`/person/${id}`);

      setName(data.name);
      setEmail(data.email);
    }
    loadData();
  }, [match.params, id]);

  const handleSave = useCallback(async () => {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required(),
    });

    const isValidPerson = await schema.isValid({ name, email });
    if (!isValidPerson) {
      return toast.error(
        'Erro ao salvar, por favor confira seus dados e tente novamente',
      );
    }

    await api.put('/person', {
      id,
      name,
      email,
    });

    history.goBack();
    return toast.success('Integrante editado com sucesso!');
  }, [name, email, id, history]);

  return (
    <Container>
      <Content>
        <Header />

        <GobackButton onClick={() => history.goBack()}>
          <MdKeyboardBackspace size={30} />
          <span>Voltar</span>
        </GobackButton>

        <Main>
          <Form>
            <h1>Editar integrante</h1>
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
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </FormRow>

            <Button onClick={handleSave}>Salvar</Button>
          </Form>
        </Main>
      </Content>
    </Container>
  );
};
export default Home;
