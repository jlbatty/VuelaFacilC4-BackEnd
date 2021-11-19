import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import { findDocumentById, findDocuments, insertDocument,deleteDocument,updateDocument } from "./Controller";

export const obtenerAvionPorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

    const query = { "_id": new ObjectId(req.params.id)}
    findDocumentById(res,query, 'aviones')
}

export const obtenerAviones = async ( res: Response<any, Record<string, any>, number>) =>{
    const query = {}
    findDocuments(res, query, 'aviones')
}

export const agregarAvion = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>) =>{
  const document = req.body
  insertDocument(res,'aviones',document)
}

export const borrarAvion = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id)}
  deleteDocument(res,query, 'aviones')

}
export const actualizarAvion = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id)}
  const document = req.body
  updateDocument(res,query, 'aviones',document)
}

