import { Router } from 'express'
import { Express } from 'express-serve-static-core';
import { actualizarReserva, agregarReserva, borrarReserva, obtenerReservaPorCedula, obtenerReservas } from '../controllers/ReservasController';

const Reservas = (app: Express): void => {

  const router = Router();
  app.use('/', router)

  router.get('/reservas', (req, res) => obtenerReservas(res))
  router.get('/reservas/cliente', (req, res) => obtenerReservaPorCedula(req, res))
  router.get('/reservas/:id', (req, res) => obtenerReservaPorCedula(req, res))
  router.post('/reservas', (req, res) => agregarReserva(req, res))
  router.delete('/reservas/:id', (req, res) => borrarReserva(req, res))
  router.put('/reservas/:id', (req, res) => actualizarReserva(req, res))

}

export default Reservas