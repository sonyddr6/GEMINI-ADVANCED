const express = require('express');
const path = require('path');
const app = express();

// Sirva arquivos estáticos da pasta build/dist
app.use(express.static(path.join(__dirname, 'dist')));

// Todas as outras rotas mandam para index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Servidor rodando na porta', PORT));
