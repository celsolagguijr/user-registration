import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import { AppDataSource } from "./config/AppSourceData";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Note: I set origin to "*" to allow requests from any domain — useful for development or open APIs.
// If I want to restrict it to a specific frontend, I can replace it with something like ['http://localhost:3000']. 
// I enabled common HTTP methods (GET, POST, PUT, DELETE) and allowed headers like Content-Type and Authorization.
// Since I'm not using cookies or credentials for now, I kept credentials set to false.
app.use(cors({
    origin : "*", // ["'http://localhost:3000'"] => your domain here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
}))
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// all routes here
app.use("/api", routes);

// Init database
AppDataSource.initialize().then(() => {
    
    // if DB init success, run the server
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    });
}).catch(err => {
    throw new Error(err);
})




