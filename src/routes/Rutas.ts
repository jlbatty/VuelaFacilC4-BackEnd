import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { agregarRuta, obtenerRutaPorId, obtenerRutas,borrarRuta,actualizarRuta } from '../controllers/RutasController';

const Rutas = (app: Express) : void => {
  
  const router = Router();
  app.use('/', router);

  router.get('/rutas', (req, res) => obtenerRutas(res) )
  router.get('/rutas/:id', (req, res) => obtenerRutaPorId(req, res) )
  router.post('/crearRutas', (req, res) => agregarRuta(req, res))
  router.delete('/eliminarRutas/:id', (req, res) => borrarRuta(req,res))
  router.put('/modificarRuta/:id', (req, res) => actualizarRuta(req,res)) 
  
}

export default Rutas