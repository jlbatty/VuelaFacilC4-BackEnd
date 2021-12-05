import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import { findDocumentById, findDocuments, insertDocument, deleteDocument, updateDocument } from "./Controller";

export const obtenerClientePorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

  const query = { "_id": new ObjectId(req.params.id) }
  findDocumentById(res, query, 'clientes')
}

export const obtenerClientePorCc = async (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>
): Promise<void> => {
  if (typeof (req.query.cedula) === 'string') {
    try {
      const cedula = req.query.cedula
      const query = { "documento": cedula }
      console.log(query)
      findDocumentById(res, query, 'clientes')
    } catch (error) {
      console.log(error)
    }
  }
}

export const obtenerClientes = async (res: Response<any, Record<string, any>, number>) => {
  const query = {}
  findDocuments(res, query, 'clientes')
}

export const agregarCliente = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const document = req.body
  insertDocument(res, 'clientes', document)
}

export const borrarCliente = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id) }
  deleteDocument(res, query, 'clientes')

}
export const actualizarCliente = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id) }
  const document = req.body
  updateDocument(res, query, 'clientes', document)
}