import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({
    port: 8181
});

wsServer.on('connection', wb => {
    wb.on('message', data => {
        wb.send(data.toString.toUpperCase());
    });

    wb.on('error', error => console.error(error.message));
});

export default wsServer;