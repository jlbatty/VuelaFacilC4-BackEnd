import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { actualizarVuelo, agregarVuelo, borrarVuelo, obtenerVueloPorId, obtenerVuelos } from '../controllers/VuelosController'

const Vuelos = (app: Express): void => {

  const router = Router();
  app.use('/', router)

  router.get('/vuelos', (req, res) => obtenerVuelos(res))
  router.get('/vuelos/:id', (req, res) => obtenerVueloPorId(req, res))
  router.post('/vuelos', (req, res) => agregarVuelo(req, res))
  router.delete('/vuelos/:id', (req, res) => borrarVuelo(req, res))
  router.put('/vuelos/:id', (req, res) => actualizarVuelo(req, res))

}

export default Vuelos