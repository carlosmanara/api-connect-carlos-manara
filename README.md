# API Connect

API REST para gerenciamento de usuários, desenvolvida como MVP para uma plataforma de gestão de cadastros.

## Objetivo

Fornecer um backend funcional capaz de listar, cadastrar, buscar, atualizar e remover usuários, servindo de base para a interface front-end da aplicação.

## Tecnologias utilizadas

- Node.js
- Express
- Nodemon (ambiente de desenvolvimento)

## Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/carlosmanara/api-connect-carlos-manara.git
cd api-connect-carlos-manara
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```

4. O servidor estará disponível em `http://localhost:3000`

## Endpoints

| Método | Rota          | Descrição                       | Status de sucesso |
|--------|---------------|----------------------------------|--------------------|
| GET    | /users        | Lista todos os usuários          | 200                |
| GET    | /users/:id    | Busca um usuário específico      | 200 / 404          |
| POST   | /users        | Cadastra um novo usuário         | 201 / 400          |
| PUT    | /users/:id    | Atualiza um usuário existente    | 200 / 404          |
| DELETE | /users/:id    | Remove um usuário existente      | 204 / 404          |

### Exemplo de requisição - POST /users

```json
{
  "name": "Carlos Manara",
  "email": "carlos.manara@email.com"
}
```

### Exemplo de resposta - sucesso (201)

```json
{
  "data": {
    "id": 3,
    "name": "Carlos Manara",
    "email": "carlos.manara@email.com"
  }
}
```

### Exemplo de resposta - erro de validação (400)

```json
{
  "error": "Os campos \"name\" e \"email\" são obrigatórios."
}
```

## Autor

Carlos Alberto Manara