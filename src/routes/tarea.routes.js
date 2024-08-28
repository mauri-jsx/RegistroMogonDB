import { Router } from "express";


import {
     getTarea,
     getTareaid,
     CrearTarea,
     EliminarTarea,
     EditarTarea
        } from "../controllers/tarea.controllers.js";
import { authRequired } from "../middlewares/validation.Token.js";

import { validateSchema } from "../middlewares/validation.user.js";

import { tareaSchema } from "../Schema/tarea.Schema.js";

const routerTarea = Router();



routerTarea.get("/tarea", authRequired, getTarea)

routerTarea.get("/tarea/:id", authRequired, getTareaid)

routerTarea.post("/tarea", authRequired, validateSchema(tareaSchema), CrearTarea)

routerTarea.delete("/tarea/:id", authRequired, EliminarTarea)

routerTarea.put("/tarea/:id", authRequired, EditarTarea)

export { routerTarea }