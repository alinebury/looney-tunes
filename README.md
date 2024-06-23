# Project Challenge

## Instruções de Uso

  - Clonar o Projeto:
    - SSH: `git@github.com:alinebury/looney-tunes.git`
    - HTTPS: `https://github.com/alinebury/looney-tunes.git`

### Início do Ambiente Docker
  - Construa os containers Docker:
    ```bash
      docker-compose build
    ```

  - Inicie os containers:
    ```bash
      docker-compose up
    ```

  - Acessando o Container do Backend
    #### Obs: Na primeira vez que você executar os comandos acima, pode ser necessário executar comandos adicionais dentro do container do backend.

    - Listar os containers em execução:
    ```bash
      docker ps
    ```

    O retorno deve ser parecido com:
    ```bash
      CONTAINER ID   IMAGE          COMMAND                  CREATED       STATUS         PORTS                                                 NAMES
      3fb46231ab9a   zen_backend    "docker-entrypoint.s…"   2 hours ago   Up 3 seconds   3000/tcp, 0.0.0.0:3001->3001/tcp, :::3001->3001/tcp   backend
      b5ef775094bb   mongo:latest   "docker-entrypoint.s…"   2 hours ago   Up 3 seconds   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp         mongo
    ```

    - Conectar ao container do backend:
    ```bash
      docker exec -it 3fb46231ab9a sh
    ```

    - Dentro do container do backend, instale todas as dependências do projeto:
    ```bash
      npm i
    ```

### Início do Ambiente Local
Caso prefira rodar o projeto localmente sem Docker:

  - Instale o MongoDB na sua máquina. Siga as instruções de instalação na documentação oficial do MongoDB

    [Instalação MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
    
    [MongoDB Compass](https://www.mongodb.com/try/download/compass)

  - Crie uma base dados com o nome `mongodb:27017/tunes-looney`
  - Execute o comando na raiz do projeto para instalar todas as dependências do projeto:
    ```bash
      npm i
    ```
  - Execute o projeto com o comando na raiz do projeto
    ```bash
      npm start
    ```

### Tecnologias Usadas
  - JavaScript
  - NodeJs
  - Express
  - MongoDB
  - Jest

## Testes
  - Para executar os testes do projeto, execute o comando na raiz do projeto:
  ```bash
    npm test
  ```

# Endpoints Disponíveis

## Auth

  - Criar Usuário
    - Usuário Normal:
      - Endpoint: `localhost:3001/auth/create`
        ```json
          {
            "name": "Pernalonga",
            "email": "email@pernalonga.com"
          }
        ```

    - Usuário Médico:
      - Endpoint: `localhost:3001/auth/create`
        ```json
          {
            "name": "Patolino",
            "email": "email@patolino.com",
            "specialization": "psychologist"
          }
        ```

  - Atualizar Usuário
      - Endpoint: `localhost:3001/auth/:id`
        ```json
          {
            "email": "frangolino@email.com"
          }
        ```

  - Deletar Usuário
    - Endpoint: `localhost:3001/auth/:id`

## Appointments

  - Criar Consulta
    ```json
      {
        "patient": "667865cacac352006f49b4d3",
        "doctor": "6678640bca485f0053a7e3ed",
        "specialization": "psychologist",
        "date": "2024-07-01T15:30:00",
        "status": "scheduled"
      }
    ```

  - Buscar Consultas
    - Endpoint: `localhost:3001/appointments/?doctorId={doctorId}&start=2024-06-01&end=2024-08-01&status=scheduled`

  - Atualizar Consultas
    - Endpoint: `localhost:3001/appointments/:id/update` (6678688f9efd5000ce6c387d)
      ```json
      {
        "doctor": "6678640bca485f0053a7e3ed",
        "date": "2024-07-10T15:30:00.000Z",
        "status": "rescheduled"
      }
      ```

  - Dispobilidade do medico
    - Criar Agenda
      - Endpoint: `localhost:3001/schedule`
        ```json
          {
            "doctorId": "6678640bca485f0053a7e3ed",
            "doctorSpecialty": "psychologist",
            "weekDays": {
              "monday": {
                "morning": {
                  "startTime": "08:00",
                  "endTime": "11:00"
                },
                "afternoon": {
                  "startTime": "13:00",
                  "endTime": "17:00"
                },
                "evening": {
                  "startTime": "18:00",
                  "endTime": "22:00"
                }
              },
              "tuesday": {
                "morning": {
                  "startTime": "08:30",
                  "endTime": "12:30"
                },
                "afternoon": {
                  "startTime": "13:30",
                  "endTime": "17:30"
                },
                "evening": {
                  "startTime": "18:30",
                  "endTime": "22:30"
                }
              },
              // Continuação dos demais dias da semana
            }
          }
        ```

  - Buscar Agenda
    - Endpoint: `localhost:3001/schedule/:id`

  - Atualizar Agenda
    - Endpoint: `localhost:3001/schedule/:id/update`
