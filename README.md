# User Management REST API — TypeScript, JWT, SQLite

## Sobre o Projeto

API REST desenvolvida com TypeScript para gerenciamento de usuários e autenticação utilizando JWT.

O projeto foi criado com o objetivo de praticar:

* TypeScript
* Arquitetura em Camadas
* Repository Pattern
* Injeção de Dependência
* Autenticação com JWT
* Criptografia de Senhas
* Boas Práticas de Backend

---

## Tecnologias de Desenvolvimento

* TypeScript
* Node.js
* Express
* SQLite
* JWT
* Argon2
* UUID
* Dotenv

## Tecnologias de Teste

### Testes Unitários

* Mocha
* Chai

### Testes de Integração

* Supertest
* Mocha
* Chai

### Testes End-to-End (E2E)

* Cypress

## Gerenciamento de Dependências

* BUN

---

## Estrutura

```bash
src
├── controllers
├── services
├── repositories
├── interfaces
├── models
├── middlewares
├── routes
├── config
└── server.ts

tests/
├── unit/
│   ├── services/
│   └── repositories/
│
├── integration/
│   ├── auth/
│   └── users/
│
├── factories/
│   ├── user.factory.ts
│   └── auth.factory.ts
│
├── fixtures/
│   └── users.json
│
└── helpers/
    ├── database.helper.ts
    └── auth.helper.ts
```

---

## Funcionalidades

### Usuários

* Criar usuário
* Buscar usuário por ID
* Buscar usuário por e-mail

### Autenticação

* Login
* Geração de Token JWT
* Validação de Token
* Rotas Protegidas

---

## Endpoints

### Criar Usuário

```http
POST /users
```

Body:

```json
{
  "name": "João",
  "email": "joao@email.com",
  "password": "123456"
}
```

---

### Login

```http
POST /auth/login
```

Body:

```json
{
  "email": "joao@email.com",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "jwt_token"
}
```

---

### Perfil

```http
GET /users/profile
```

Header:

```http
Authorization: Bearer TOKEN
```

---

## Instalação

Clone o projeto:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

---

## Variáveis de Ambiente

Crie um arquivo `.env`:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
```

---

## Conceitos Aplicados

* SOLID
* Repository Pattern
* Service Layer
* Dependency Injection
* JWT Authentication
* Password Hashing
* TypeScript

---

## Autor

Desenvolvido por Nathanael Henrique como projeto de estudo para aprofundamento em TypeScript e desenvolvimento backend.
