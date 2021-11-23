import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { actualizarAvion, agregarAvion, borrarAvion, obtenerAviones, obtenerAvionPorId } from '../controllers/AvionesController';

const Aviones = (app: Express) : void => {
  
  const router:Router = Router();
  app.use('/', router)

  router.get('/obtenerAviones', (req, res) => obtenerAviones(res) )
  router.get('/obtenerAvion/:id', (req, res) => obtenerAvionPorId(req, res) )
  router.post('/agregarAvion', (req, res) => agregarAvion(req, res))
  router.delete('/borrarAvion/:id', (req, res) => borrarAvion(req,res))
  router.put('/actualizarAvion/:id', (req, res) => actualizarAvion(req,res))
  
}

export default Aviones