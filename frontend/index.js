// import * as THREE from 'three';

(async () => {
    let wsConfig;
    try {
        wsConfig = await fetch('ws-config');
    } catch (e) {
        console.log(`Couldn't get WS config: ${e.message}`);
    }
    
    const ws = new WebSocket(url);
    
    ws.onopen = event => {
        console.log(event)
        ws.send('Hola');
    }
    
    ws.onmessage(data => console.log(data))

});
