import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { obtenerAeropuertos, obtenerAeropuertoPorId, agregarAeropuerto, borrarAeropuerto, actualizarAeropuerto } from '../controllers/AeropuertosController'

const Aeropuertos = (app: Express) : void => {
  
  const router = Router();
  app.use('/', router)

  router.get('/obtenerAeropuertos', (req, res) => obtenerAeropuertos(res) )
  router.get('/obtenerAeropuerto/:id', (req, res) => obtenerAeropuertoPorId(req, res) )
  router.post('/agregarAeropuerto', (req, res) => agregarAeropuerto(req, res))
  router.delete('/borrarAeropuerto/:id', (req, res) => borrarAeropuerto(req,res))
  router.put('/actualizarAeropuerto/:id', (req, res) => actualizarAeropuerto(req,res))
  
}

export default Aeropuertos