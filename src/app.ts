import express from 'express';
import Aeropuertos from './routes/Aeropuertos';
import Aviones from './routes/Aviones';
import Clientes from './routes/Clientes';
import Rutas from './routes/Rutas'

const app = express();
const port = 3000;

//con estas líneas de código usamos el parser JSON de express para obtener el Body de la request.
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

//acá permito la conexión a mi backend desde cualquier origen, insertandole a la respuesta esos headers
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  

//acá llamo a mi router
Rutas(app);
Clientes(app)
Aviones(app)
Aeropuertos(app)


app.listen(port, () => {
    return console.log(`servidor corriendo sobre el puerto ${port}`)
});