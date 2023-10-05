import express from "express";
import wsServer from "./ws.js";

const app = express();

const port = 8080;

app.use(express.static('./frontend'));

app.get('/ws-config', (req, res) => {
    const port = wsServer.address().port;
    const url = `ws://127.0.0.1:${port}`;
    const config = { url: url };
    res.status(200).json(config);
});

app.listen(port, () => {
    console.log(`Escuchando en ${port}...`);
});