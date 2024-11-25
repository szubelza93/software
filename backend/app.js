const express = require('express');
const app = express();

app.use(express.json());
//app.use('/api/especies', require('./routes/especie'));
//app.use('/api/razas', require('./routes/raza'));
app.use('/api/turnos', require('./routes/turno'));
app.use('/api/personas', require('./routes/persona'));
app.use('/api/clientes', require('./routes/cliente'));
app.use('/api/empleados', require('./routes/empleado'));
app.use('/api/usuarios', require('./routes/usuario'));
//app.use('/api/mascotas', require('./routes/mascota'));
//app.use('/api/historiasclinicas', require('./routes/historiaClinica'));
//app.use('/api/consultas', require('./routes/consulta'));
//app.use('/api/login', require('./routes/auth'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
