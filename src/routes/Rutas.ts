import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { agregarRuta, obtenerRutaPorId, obtenerRutas, borrarRuta, actualizarRuta } from '../controllers/RutasController';

const Rutas = (app: Express): void => {

  const router = Router();
  app.use('/', router);

  //Las URI's como buena practica, indican el contenido del recurso, en vez de la acción que ejecutan.
  //la acción se especifica con el verbo de la petición (GET, POST, DELETE)
  //https://restfulapi.net/resource-naming/
  router.get('/rutas', (req, res) => obtenerRutas(res))
  router.get('/rutas/:id', (req, res) => obtenerRutaPorId(req, res))
  router.post('/rutas', (req, res) => agregarRuta(req, res))
  router.delete('/rutas/:id', (req, res) => borrarRuta(req, res))
  router.put('/rutas/:id', (req, res) => actualizarRuta(req, res))

}

export default Rutas