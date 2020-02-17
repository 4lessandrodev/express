const http = require('http');
const express = require('express');
let app = express();


const callback = () => {
  console.log('Levantando o servidor com Express');
};

app.listen(8000, callback);

app.listen = function () {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.get('/', (req, res) => {
  res.send('Servidor rodando na porta 8000');
});