# Brain Agriculture Backend

Este projeto é uma API para gerenciamento de produtores rurais e suas respectivas fazendas. Ele foi desenvolvido utilizando Node.js com Sequelize e PostgreSQL.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** (normalmente incluído com o Node.js)
- **Docker** e **Docker Compose**

## Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/brain-agriculture-backend.git
cd brain-agriculture-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
NODE_ENV=development
DB_HOST=db
DB_NAME=brain_agriculture
DB_USER=postgres
DB_PASSWORD=postgres
DB_PORT=5432
```

### 4. Inicie o servidor com Docker

Para iniciar o servidor utilizando Docker, você pode escolher o ambiente de desenvolvimento ou produção:

#### Desenvolvimento

 <!-- $env:NODE_ENV="dev" -->

```bash
docker-compose --profile app up --build
```

Isso iniciará o servidor em modo de desenvolvimento.

<!-- #### Produção

```bash
$env:NODE_ENV="production"
docker-compose up --build
```

Isso iniciará o servidor em modo de produção. -->

## Executando Testes

### 1. Rodar os testes

Para executar os testes unitários e de integração, você pode usar o Docker para rodar o ambiente de testes:

```bash
docker-compose --profile test up --build
```

Isso iniciará o ambiente de testes e executará todos os testes.

### 2. Rodar Seeds

Se você precisar popular o banco de dados com dados mockados, execute o seguinte comando:

```bash
npx sequelize-cli db:seed:all
```

Isso vai inserir dados mockados no banco de dados de desenvolvimento.

## Endpoints Disponíveis

Após iniciar o servidor, a API estará disponível em `http://localhost:3000`. Você pode acessar a documentação do Swagger em `http://localhost:3000/api-docs`.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
