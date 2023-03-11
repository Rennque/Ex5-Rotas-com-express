const express = require('express');
const app = express();
app.use(express.json());

app.get('/envia/:name', (request, response) => {
    let name = request.params.name;
    response.send(`Rota de API criada pelo: ${name}`);
    console.log(`Rota de API criada pelo: ${name}`);
});


app.post('/enviaObjeto', (request, response) => {
    const object = request.body;
    response.json(object);
    console.log(`Enviado com sucesso ${JSON.stringify(object)}`);
});


app.listen(3333, () => {
    console.log("Ola esse servidor foi iniciado com sucesso parabéns =D");
});
