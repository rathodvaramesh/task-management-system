---

# Weekly Execution Plan

## Week 1 - Strengthen Java + Spring Boot

### Goal
Understand how a real backend works.

### Topics

#### Java
- OOP
- Collections
- Streams Basics
- Exception Handling

#### Spring Boot
- Controller
- Service
- Repository
- Entity
- Dependency Injection

#### PostgreSQL
- SELECT
- INSERT
- UPDATE
- DELETE
- JOINS Basics

### Project Work

Task Management System

- Add Dashboard Statistics
- Add Search
- Add Validation
- Add Exception Handling

### Outcome

Able to confidently explain:

```text
Angular
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
PostgreSQL
```

---

## Week 2 - Docker Fundamentals

### Goal
Containerize applications.

### Learn

- Docker Architecture
- Images
- Containers
- Volumes
- Networks

### Practical

Create:

```text
Dockerfile
```

for:

```text
task-management-api
```

### Commands

```bash
docker build
docker images
docker run
docker ps
docker stop
docker logs
```

### Outcome

Run backend using:

```bash
docker run
```

instead of:

```bash
mvn spring-boot:run
```

---

## Week 3 - Docker Compose

### Goal
Run multiple applications together.

### Learn

- docker-compose.yml
- Service Definitions
- Environment Variables
- Networking

### Practical

Containerize:

```text
Spring Boot
PostgreSQL
```

### Command

```bash
docker compose up
```

### Outcome

No manual DB startup required.

One command starts everything.

---

## Week 4 - PostgreSQL Advanced

### Goal
Gain backend confidence.

### Learn

- Indexes
- Constraints
- Relationships

```text
One-To-One
One-To-Many
Many-To-One
```

- Query Optimization
- Explain Plan

### Practical

Enhance project:

```text
Users
Tasks
Assignments
```

### Outcome

Able to design a proper database schema.

---

## Week 5 - AWS Fundamentals

### Goal
Understand cloud basics.

### Learn

#### AWS Services

- EC2
- IAM
- S3
- VPC

### Linux Basics

```bash
ls
cd
pwd
mkdir
cp
mv
rm
cat
nano
chmod
```

### Practical

Create:

```text
AWS Free Tier Account
```

Launch:

```text
Ubuntu EC2
```

### Outcome

Able to SSH into AWS instance.

---

## Week 6 - Deploy Application to AWS

### Goal
Host application publicly.

### Practical

Deploy:

```text
Spring Boot
+
PostgreSQL
```

to:

```text
AWS EC2
```

### Flow

```text
GitHub
 ↓
EC2
 ↓
Docker
 ↓
Application Running
```

### Outcome

Public URL available.

Example:

```text
http://<ec2-public-ip>:8080
```

---

## Week 7 - GitHub Actions CI/CD

### Goal
Automate deployments.

### Learn

- Workflows
- Jobs
- Runners
- Secrets

### Create

```text
.github/workflows/build.yml
```

### Flow

```text
Git Push
 ↓
GitHub Actions
 ↓
Build
 ↓
Test
```

### Outcome

Automated build pipeline.

---

## Week 8 - Automated AWS Deployment

### Goal
Zero manual deployment.

### Flow

```text
Code Change
 ↓
Git Push
 ↓
GitHub Actions
 ↓
Build Docker Image
 ↓
Deploy AWS EC2
```

### Outcome

Production-like workflow.

---

# Final Resume Goal

## Full Stack

- Angular
- TypeScript
- SCSS

## Backend

- Java 21
- Spring Boot
- Spring Data JPA

## Database

- PostgreSQL

## DevOps

- Docker
- Docker Compose

## Cloud

- AWS EC2
- Linux

## Automation

- GitHub Actions

---

# Final Project Statement

Built a full-stack Task Management System using Angular, Spring Boot, and PostgreSQL. Implemented complete CRUD functionality, containerized the application using Docker, deployed the solution on AWS EC2, and automated build/deployment workflows using GitHub Actions CI/CD.