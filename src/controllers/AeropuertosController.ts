import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import { findDocumentById, findDocuments, insertDocument,deleteDocument,updateDocument } from "./Controller";

export const obtenerAeropuertoPorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

    const query = { "_id": new ObjectId(req.params.id)}
    findDocumentById(res,query, 'aeropuertos')
}

export const obtenerAeropuertos = async ( res: Response<any, Record<string, any>, number>) =>{
    const query = {}
    findDocuments(res, query, 'aeropuertos')
}

export const agregarAeropuerto = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>) =>{
  const document = req.body
  insertDocument(res,'aeropuertos',document)
}

export const borrarAeropuerto = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id)}
  deleteDocument(res,query, 'aeropuertos')

}
export const actualizarAeropuerto = (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>) => {
  const query = { "_id": new ObjectId(req.params.id)}
  const document = req.body
  updateDocument(res,query, 'aeropuertos',document)
}

