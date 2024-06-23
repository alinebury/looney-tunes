# Instruções de Uso
Início do Ambiente Docker

  ```bash
    docker-compose build
  ```

Inicie os containers:

  ```bash
    docker-compose up
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
      - Endpoint: `localhost:3001/auth/:id` (6678696851312b00dcabb680)
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
    - Endpoint: `localhost:3001/appointments/?doctorId=6678640bca485f0053a7e3ed&start=2024-06-01&end=2024-08-01&status=scheduled`

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
    - Endpoint: `localhost:3001/schedule/:id` (6678640bca485f0053a7e3ed)

  - Atualizar Agenda
    - Endpoint: `localhost:3001/schedule/:id/update` (6678640bca485f0053a7e3ed)