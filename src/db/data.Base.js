import mongoose from "mongoose";

export const ConexionMDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Crud", {
        });
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
};