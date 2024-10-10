const express = require('express');
const path = require('path');
const app = express();

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;