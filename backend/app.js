/*const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ mensaje: "Hola desde el backend" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

require('dotenv').config();*/

// Ahora puedes usar las variables así:
const puerto = process.env.PORT;
const uri = process.env.MONGO_URI;

console.log("Conectando a:", uri);

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

// Esto le dice a Express que la carpeta "frontend" contiene tus archivos estáticos
app.use(express.static('frontend'));

// Ruta principal que entrega el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});