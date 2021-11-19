import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { actualizarAvion, agregarAvion, borrarAvion, obtenerAviones, obtenerAvionPorId } from '../controllers/AvionesController';

const Aviones = (app: Express) : void => {
  
  const router:Router = Router();
  app.use('/', router)

  router.get('/aviones', (req, res) => obtenerAviones(res) )
  router.get('/aviones/:id', (req, res) => obtenerAvionPorId(req, res) )
  router.post('/aviones', (req, res) => agregarAvion(req, res))
  router.delete('/aviones/:id', (req, res) => borrarAvion(req,res))
  router.put('/aviones/:id', (req, res) => actualizarAvion(req,res))
  
}

export default Aviones