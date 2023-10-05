const express = require('express');
const app = express();

const port = 8888;

app.use(express.static('./frontend'));

app.listen(port, () => {
    console.log(`Escuchando en ${port}...`);
});