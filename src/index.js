import { app } from "./app.js";
import { ConexionMDB } from "./db/data.Base.js";

//configuracion
app.set("port", process.env.PORT || 3000);

//servidor
ConexionMDB();

//servidor
app.listen(app.get("port"), () => {
    console.log(`Servidor en el puerto ${app.get("port")}`);
});