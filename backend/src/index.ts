import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bp from "body-parser";
import { connectDatabase } from "./utils/database";
import { user } from "./router/user";

connectDatabase();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bp.json());
app.use(cors());

const start = () => {

    app.use('/user', user);

    app.get('/', (_, res) => {
        res.status(200).send({
            success: true,
            msg: "Hello",
        });
    });

    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
}

start();
