import express from "express";
import cors from "cors";
import UserRoute from "./Routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(3030, () => console.log("Server Up and Runn"));
