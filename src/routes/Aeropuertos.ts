import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { obtenerAeropuertos, obtenerAeropuertoPorId, agregarAeropuerto, borrarAeropuerto, actualizarAeropuerto } from '../controllers/AeropuertosController'

const Aeropuertos = (app: Express) : void => {
  
  const router = Router();
  app.use('/', router)

  router.get('/aeropuertos', (req, res) => obtenerAeropuertos(res) )
  router.get('/aeropuertos/:id', (req, res) => obtenerAeropuertoPorId(req, res) )
  router.post('/aeropuertos', (req, res) => agregarAeropuerto(req, res))
  router.delete('/aeropuertos/:id', (req, res) => borrarAeropuerto(req,res))
  router.put('/aeropuertos/:id', (req, res) => actualizarAeropuerto(req,res))
  
}

export default Aeropuertos