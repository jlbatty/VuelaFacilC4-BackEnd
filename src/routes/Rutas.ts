import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { obtenerRutaPorId } from '../controllers/RutasController';

const Rutas = (app: Express) : void => {
  
  const router = Router();
  app.use('/', router)

  // router.get('/rutas', (req, res) => obtenerRutas(req, res) )
  router.get('/rutas/:id', (req, res) => obtenerRutaPorId(req, res) )
  router.post('rutas/', (req, res) => res.send(`se intentó crear un neuvo elemento`))
  router.delete('rutas/:id', (req, res) => res.send(`se intentó borrar el elemento ${req.params.id}`))
  
  //debería acá solo tener las rutas o endpoints. 
  //debería importar las rutas desde los controladores

}

export default Rutas