import { Router } from "express";
import { Express } from 'express-serve-static-core';
import { actualizarCliente, agregarCliente, borrarCliente, obtenerClientePorId, obtenerClientes } from "../controllers/ClientesController";

const Clientes = (app: Express) :void => {
  const router:Router = Router()

  app.use('/',router)

  router.get('/clientes', obtenerClientePorId )
  router.get('/clientes/:id', obtenerClientes)
  router.post('/clientes', agregarCliente)
  router.put('/clientes', actualizarCliente)
  router.delete('/clientes', borrarCliente)

}

export default Clientes