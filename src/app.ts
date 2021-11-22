import config from './config/config';
import express from 'express';
import Aeropuertos from './routes/Aeropuertos';
import Aviones from './routes/Aviones';
import Clientes from './routes/Clientes';
import Reservas from './routes/Reservas';
import Rutas from './routes/Rutas'
import Vuelos from './routes/Vuelos';
require('dotenv').config()


const app = express();
// const port = 3000;     // Reemplazado por Variable de entorno config.PORT

//con estas líneas de código usamos el parser JSON de express para obtener el Body de la request.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//acá permito la conexión a mi backend desde cualquier origen, insertandole a la respuesta esos headers
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// RUTAS
//acá llamo a mi router
Rutas(app);
Clientes(app)
Aviones(app)
Aeropuertos(app)
Vuelos(app)
Reservas(app)


app.listen(process.env.PORT || 3000, () => {
  return console.log(`servidor corriendo sobre el puerto ${process.env.PORT}`)
}); s