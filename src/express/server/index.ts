/**
 * Creacion del servidor para la api rest
 * @author ernesto
 */
import express from 'express';
import route from "../routes/route";
import https from "https"
import fs from "fs"
const app=express();
app.use(express.urlencoded({extended: true, limit:'100000kb'}));
app.use(express.json({limit:'100000kb'}));
app.use(route);
const PORT = 1289;
export default app;

app.listen(PORT, ()=>
    console.log(`Corriendo en ${PORT}`));
    
    /*
    Creacion de Protocolos seguros. Comentado ya que flutter no acepta 
    autofirmados por lo que la aplicacion frontend no funciona aunque si
    funcione las llamadas con Postman

    https
    .createServer(
      {
        key: fs.readFileSync("src/cert/key.pem"),
        cert: fs.readFileSync("src/cert/cert.pem"),
      },
      app
    )
    .listen(PORT, () => {
      console.log(`Corriendo en ${PORT}`);
    });*/
    