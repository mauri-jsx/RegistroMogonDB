import { z } from "zod";

 export const registerSchema = z.object({
    name: z.string({
        required_error: "el nombre es requerido",
    }),
    email: z.string({
        required_error: "email es requerido",
    }).email({
        message: "email invalido"
    }),
    password: z.string({
        required_error: "la contraseña es requerida",
    }).min(8,{
        message: "la contraseña debe tener al menos 8 caracteres"
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "email es requerido",
    }).email({
        message: "email es invalido"
    }),
    password: z.string({
        required_error: "la contraseña es requerida",
    }).min(6,{
        message: "la contraseña debe tener al menos 6 caracteres"
    })
})
