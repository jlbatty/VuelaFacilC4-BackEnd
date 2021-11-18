import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import { findDocumentById, findDocuments, insertDocument,deleteDocument,updateDocument } from "./Controller";

export const obtenerRutaPorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

    const query = { "_id": new ObjectId(req.params.id)}
    findDocumentById(res,query, 'rutas')
}

export const obtenerRutas = async ( res: Response<any, Record<string, any>, number>) =>{
    const query = {}
    findDocuments(res, query, 'rutas')
}

export const agregarRuta = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>) =>{
  const document = req.body
  insertDocument(res,'rutas',document)
}

export const borrarRuta = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id)}
  deleteDocument(res,query, 'rutas')

}
export const actualizarRuta = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id)}
  const document = req.body
  updateDocument(res,query, 'rutas',document)
}

