import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { actualizarAvion, agregarAvion, borrarAvion, obtenerAviones, obtenerAvionPorId } from '../controllers/AvionesController';

const Aviones = (app: Express): void => {

  const router: Router = Router();
  app.use('/', router)

  //Las URI's como buena practica, indican el contenido del recurso, en vez de la acción que ejecutan.
  //la acción se especifica con el verbo de la petición (GET, POST, DELETE)
  //https://restfulapi.net/resource-naming/
  router.get('/aviones', (req, res) => obtenerAviones(res))
  router.get('/aviones/:id', (req, res) => obtenerAvionPorId(req, res))
  router.post('/aviones', (req, res) => agregarAvion(req, res))
  router.delete('/aviones/:id', (req, res) => borrarAvion(req, res))
  router.put('/aviones/:id', (req, res) => actualizarAvion(req, res))

}

export default Aviones