# Experiment 8: JWT Authentication System 🔐

## Student Details
* **Name:** Priyal Sabharwal
* **UID:** 23BAI70075
* **University:** Chandigarh University
* **Course:** Full Stack Development / Cybersecurity

---

## 📌 Project Overview
This project implements a secure **Full-Stack Authentication System** using **JSON Web Tokens (JWT)**. It features a React-based frontend and a Spring Boot backend, focusing on secure communication and stateful session management.

### Key Features:
* **JWT Token Generation:** Backend validates credentials and issues a secure token.
* **Session Storage:** Frontend stores the JWT securely to maintain the user session.
* **Protected Routes:** Only authenticated users can access the Secure Dashboard.
* **CORS Integration:** Secure cross-origin resource sharing between Port 3000 and 8080.
* **Logout Logic:** Complete session termination by clearing tokens.

---

## 🛠️ Tech Stack
* **Frontend:** React.js, Material UI (MUI), Axios
* **Backend:** Spring Boot 3.x, Spring Security, JJWT Library
* **Tools:** IntelliJ IDEA, VS Code, Git/GitHub

---

## 🚀 How to Run

### 1. Backend (Spring Boot)
1. Open the project in IntelliJ IDEA.
2. Ensure the `application.properties` is set to port `8080`.
3. Run `JwtAuthExperimentApplication.java`.
4. Default Credentials: `admin` / `12345`.

### 2. Frontend (React)
1. Open the frontend folder in VS Code.
2. Run `npm install` to install dependencies.
3. Start the application:
   ```bash
   npm start
