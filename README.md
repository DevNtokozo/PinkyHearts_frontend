# Pinky Hearts Day Care Management System

## Overview

**Pinky Hearts Day Care Management System** is a full-stack web application designed to streamline the daily operations of a day care center. The system enables administrators to manage children, parents, attendance, events, and payments through a modern, user-friendly interface.

The application was built using **Spring Boot** for the backend and **React (Vite)** for the frontend, with **PostgreSQL** as the database.

---

# Features

### Parent Management

* Register parents
* Update parent information
* Delete parent records
* View all registered parents

### Child Management

* Register children
* Assign children to parents
* Update child details
* Delete child records
* View all children

### Attendance Management

* Record daily attendance
* Track check-in times
* Track check-out times
* View attendance history

### Event Management

* Create events
* Update event information
* Delete events
* View upcoming events

### Payment Management

* Record tuition payments
* Track payment status
* View payment history

### Authentication

* User registration
* User login
* Password encryption using BCrypt
* Spring Security integration

### REST API

* CRUD operations
* JSON request/response
* Swagger API documentation

---

# Technologies Used

## Backend

* Java 21
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* PostgreSQL
* Gradle
* Swagger (OpenAPI)

## Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Icons

## Database

* PostgreSQL

---

# Database

The application uses PostgreSQL.

Example configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/pinkyhearts
spring.datasource.username=postgres
spring.datasource.password=4160

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# Deployment

## Backend

* Render

## Frontend

* Vercel

## Database

* PostgreSQL

---

# Future Enhancements

* Email notifications to parents
* SMS reminders
* Dashboard analytics
* Parent portal
* Teacher portal
* File uploads for child documents
* Online payment integration
* Report generation (PDF/Excel)

---

# Author

**Ntokozo Mbuli**

* BSc in Mathematics and Information Systems
* Full Stack Developer
* Java | Spring Boot | React | PostgreSQL

---

# License

This project is intended for educational and portfolio purposes.
