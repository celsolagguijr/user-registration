# 📘 Project Setup Guide

## 🛠 Tech Stack

- **Backend:** `TypeScript`, `Express.js`, `TypeORM`, `MySQL`, `nodemon`  
- **Frontend:** `React.js`, `Ant Design`, `TypeScript`, `axios`, `Vite`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/celsolagguijr/user-registration.git
cd user-registration
```


### 2. Set Up the Database
Before running the app, create the MySQL database:

```sql

CREATE DATABASE IF NOT EXISTS app;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `firstName` varchar(150) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_0900_ai_ci;

```


### 3. Install Dependencies
Run the following commands in both the backend and frontend directories:

```bash
    npm install
```


### 4. Configure Environment Variables
A pre-configured `.env` file is already included in the project.

```yml
DB_HOST=localhost
DB_PORT=3306
DB_NAME=app
DB_USERNAME=root 
DB_PASSWORD= 

SERVER_PORT=3000
```

You only need to update the following:

- Database port — default: 3306

- Backend server port — default: 3000

- Frontend dev server port — default: 5173


 ### 5. Run the App

 ```bash
    # In the backend folder
    npm run dev

    # In the frontend folder
    npm start
 ```
