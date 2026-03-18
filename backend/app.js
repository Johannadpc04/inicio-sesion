/*const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ mensaje: "Hola desde el backend" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});*/

const express = require('express');
const cors = require('cors'); // Importante para conectar con el frontend
const app = express();

app.use(cors());
app.use(express.json());

// Esta es la "ruta" que consultaremos
app.get('/datos', (req, res) => {
    res.json({ 
        usuario: "Juan Pérez", 
        estado: "Conectado",
        mensaje: "¡Datos recibidos desde el servidor!" 
    });
});

app.listen(3000, () => console.log("Backend en http://localhost:3000"));