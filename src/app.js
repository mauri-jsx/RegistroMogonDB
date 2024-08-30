import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import { router } from "./routes/user.routes.js";
import { routerTarea } from "./routes/tarea.routes.js";
import cors from "cors"


const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookie());
app.use( routerTarea);
app.use(router);

export { app };