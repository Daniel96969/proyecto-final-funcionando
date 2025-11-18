const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/mensaje', (req, res) => {
  res.json({ 
    mensaje: '¡Conexión EXITOSA frontend-backend!',
    timestamp: new Date().toLocaleTimeString(),
    status: 'OK'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend en puerto ${PORT}`);
});