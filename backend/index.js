import express from "express";
import wsServer from "./ws.js";

const app = express();

const port = 8080;

app.use(express.static('./frontend'));

app.listen(port, () => {
    console.log(`Escuchando en ${port}...`);
});