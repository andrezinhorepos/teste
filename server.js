const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilita CORS para qualquer origem
app.use(cors());

// String definida
const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII=';

// Rota GET
app.get('/solicitarbase64', (req, res) => {
  res.send(base64);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
