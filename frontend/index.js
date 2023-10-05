// import * as THREE from 'three';

const wsUrl = 'ws://127.0.0.1:8181';
const ws = new WebSocket(wsUrl);
    
ws.onopen = event => {
    ws.send('Hola');
    
    btn.addEventListener('click', () => {
        ws.send(new Date().toTimeString());
    });
}

ws.onmessage = msg => {
    const data = msg.data;
    document.getElementById('contenedor').innerHTML += `${data}<br>`;
};

const btn = document.getElementById('btn');