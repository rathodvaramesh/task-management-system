# Task Management System

A full-stack Task Management application built using Angular, Spring Boot, and PostgreSQL.

## Tech Stack

### Frontend
- Angular 20
- TypeScript
- SCSS
- RxJS

### Backend
- Java 21
- Spring Boot 4
- Spring Data JPA
- Maven

### Database
- PostgreSQL 17
- pgAdmin 4

### Tools
- Git & GitHub
- VS Code
- REST Client Extension

## Project Structure

```text
task-management-system
│
├── task-management-api
│   ├── src
│   ├── pom.xml
│   └── api-test.http
│
├── task-management-ui
│   ├── src
│   ├── angular.json
│   └── package.json
│
└── docs
```

## Features Implemented

### Backend
- Spring Boot project setup
- PostgreSQL integration
- JPA/Hibernate configuration
- Task Entity
- Task Repository
- Task Service
- Task Controller
- Health Check API
- Create Task API
- Get Tasks API
- REST Client integration

### Frontend
- Angular application setup
- Project structure initialization
- Service layer setup

## API Endpoints

### Health Check

```http
GET /health
```

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Learn Spring Boot",
  "description": "Create CRUD APIs",
  "status": "OPEN",
  "priority": "HIGH"
}
```

## Database

Database Name:

```text
taskdb
```

Table:

```text
tasks
```

## Local Setup

### Start PostgreSQL

```cmd
"C:\PostgreSQL\17\bin\postgres.exe" -D "C:\PostgreSQL\17\data"
```

### Start Backend

```cmd
cd task-management-api
.\mvnw.cmd spring-boot:run
```

### Start Frontend

```cmd
cd task-management-ui
ng serve
```

## Application URLs

Frontend:

```text
http://localhost:4200
```

Backend:

```text
http://localhost:8080
```

Health Check:

```text
http://localhost:8080/health
```

## Roadmap

- [x] Initial Project Setup
- [x] PostgreSQL Integration
- [x] Create Task API
- [x] Get Tasks API
- [ ] Get Task By Id
- [ ] Update Task
- [ ] Delete Task
- [ ] Exception Handling
- [ ] DTO Layer
- [ ] Validation
- [ ] Angular Task Dashboard
- [ ] Authentication & Authorization

## Author

Ramesh Rathod
GitHub: rathodvaramesh
