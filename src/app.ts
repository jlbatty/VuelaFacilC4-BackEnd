import express from 'express';

const app = express();
const port = 3000;

//con estas líneas de código usamos el parser JSON de express para obtener el Body de la request.
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

app.get('/', (req, res) => {
    res.send('prueba del servidor');
});
app.listen(port, () => {
    return console.log(`servidor corriendo sobre el puerto ${port}`)
});