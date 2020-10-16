<h1 align="center">
  <img src="https://user-images.githubusercontent.com/48302018/96207902-b8f11e80-0f42-11eb-8617-e243708332ae.png" width="150px"/>
</h1>
<h3 align="center">Amigo Secreto</h3>

<br>
<br>

## Sobre o projeto
A partir do frontend construído em React podemos adicionar os participantes do nosso amigo secreto, e sortear-los. Assim cada integrante recebrá um email informando qual é o seu amigo.



## :bulb: Tecnologias utilizadas
 
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [MongoDB](https://www.mongodb.com/)
- [Ethereal fake SMTP](https://ethereal.email/)
- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup#install)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


## Como executar o projeto?

Pré Requisitos
* Ambiente Node.js configurado.
* MongoDB em localhost.

Primeiramente Clone o repositório

```sh
  git clone https://github.com/ebertmota/ad-2019.git
```

<h3>Backend</h3>

Navegue até a pasta do backend

```sh
  cd backend
```

Agora vamos instalar as dependências necessárias

```sh
  yarn
```
ou

```sh
  npm install
```
E por fim iniciar o backend

```sh
  yarn dev:server
```
ou

```sh
  npm run dev:server
```


<h3>Frontend</h3>
Navegue até a pasta do frontend

```sh
  cd frontend
```
Instale as dependências necessárias

```sh
  yarn
```
ou

```sh
  npm install
```
E por fim vamos iniciar o frontend

```sh
  yarn start
```
ou

```sh
  npm run start
```

<br>


## Como testar o envio de emails?

Assim que você realizar o sorteio, os e-mails serão enviados automaticamente para cada integrante dele. Mas para visualizar isso em ambiente de desenvolvimento usamos o Ethereal que é um serviço de fake SMTP.
Então quando o sorteio for realizado, um log com a URL de visualização dos e-mails vai aparecer no terminal que seu backend está rodando, como na imagem abaixo:

<img src="https://user-images.githubusercontent.com/48302018/96209576-526dff80-0f46-11eb-8ede-eb2c98604609.png" />

basta clicar na "Preview URL:" e visualizar o email.

<br>
<br>

---
Made with :blue_heart: by Ebert Mota
