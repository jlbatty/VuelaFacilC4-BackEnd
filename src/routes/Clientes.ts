import { Router } from "express";
import { Express } from 'express-serve-static-core';
import { actualizarCliente, agregarCliente, borrarCliente, obtenerClientePorCc, obtenerClientePorId, obtenerClientes } from "../controllers/ClientesController";

const Clientes = (app: Express): void => {
  const router: Router = Router()

  app.use('/', router)

  router.get('/clientes', (req, res) => obtenerClientes(res))
  router.get('/clientes/buscar', (req, res) => obtenerClientePorCc(req, res))
  router.get('/clientes/:id', (req, res) => obtenerClientePorId(req, res))
  router.post('/clientes', (req, res) => agregarCliente(req, res))
  router.put('/clientes/:id', (req, res) => actualizarCliente(req, res))
  router.delete('/clientes/:id', (req, res) => borrarCliente(req, res))

}

export default Clientes