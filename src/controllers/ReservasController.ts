import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import { findDocumentById, findDocuments, insertDocument, deleteDocument, updateDocument } from "./Controller";

export const obtenerReservaPorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

  const query = { "_id": new ObjectId(req.params.id) }
  findDocumentById(res, query, 'reservas')
}

export const obtenerReservaPorCedula = async (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

  const query = { "documentoCliente": req.body.documentoCliente }
  findDocumentById(res, query, 'reservas')
}

export const obtenerReservas = async (res: Response<any, Record<string, any>, number>) => {
  const query = {}
  findDocuments(res, query, 'reservas')
}

export const agregarReserva = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const document = req.body
  insertDocument(res, 'reservas', document)
}

export const borrarReserva = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id) }
  deleteDocument(res, query, 'reservas')

}
export const actualizarReserva = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id) }
  const document = req.body
  updateDocument(res, query, 'reservas', document)
}