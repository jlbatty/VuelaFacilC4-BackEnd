import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import { findDocumentById, findDocuments, insertDocument, deleteDocument, updateDocument } from "./Controller";

export const obtenerVueloPorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

  const query = { "_id": new ObjectId(req.params.id) }
  findDocumentById(res, query, 'vuelos')
}

export const buscarVuelos = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {

  const date = new Date(req.body.fecha)
  const tomorrow = new Date(req.body.fecha)
  tomorrow.setDate(date.getDate() + 1)
  const query = {
    "ruta.salida.IATA": req.body.IATASalida,
    "ruta.llegada.IATA": req.body.IATALlegada,
    "fechaVuelo": {
      $gte: date,
      $lte: tomorrow
    }
  }

  findDocuments(res, query, 'vuelos')

}

export const obtenerVuelos = async (res: Response<any, Record<string, any>, number>) => {
  const query = {}
  findDocuments(res, query, 'vuelos')
}

export const agregarVuelo = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const document = req.body
  insertDocument(res, 'vuelos', document)
}

export const borrarVuelo = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id) }
  deleteDocument(res, query, 'vuelos')

}
export const actualizarVuelo = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id) }
  const document = req.body
  updateDocument(res, query, 'vuelos', document)
}

