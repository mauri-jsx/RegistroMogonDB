import {  Router } from "express";

const router = Router();

import { registro , login, Logut, profile} from "../controllers/user.controllers.js";

import { authRequired } from "../middlewares/validation.Token.js";

import { validateSchema } from "../middlewares/validation.user.js";

import { registerSchema, loginSchema } from "../Schema/auth.Schema.js";
//rutas
router.post("/register",validateSchema(registerSchema), registro)

router.post("/login",validateSchema(loginSchema), login)

router.post("/cierre", Logut)

router.get("/profile", authRequired, profile )

export { router };