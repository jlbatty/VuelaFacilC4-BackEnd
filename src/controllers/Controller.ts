import { response } from "express";
import { Response } from "express-serve-static-core";
import getConnection from "../services/mongo.service";


export const findDocumentById = async (
  res: Response<any, Record<string, any>, number>, 
  query:Object, 
  collection:string ) => {
  const client = getConnection()
  try{
    await client.connect()
    const document = await client.db('vuelaFacil').collection(collection).findOne(query)
    if (document){
      res.status(200)
      res.send(document)
    } else {
      res.status(404)
      res.send('No se encontró ningín documento')
    }
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}

export const findDocuments = async ( 
  res: Response<any, Record<string, any>, number>, 
  query:Object, 
  collection:string) => {

    const client = getConnection()
    try{
      await client.connect()
      const cursor = await client.db('vuelaFacil').collection(collection).find(query)
      if ((await cursor.count()) === 0){
        res.status(404)
        res.send('No se encontró ningín documento')
      } else {
        const data = await cursor.toArray()
        res.status(200)
        res.send(data)
      }
      
    } catch (error) {
      console.error(error)
    } finally {
      client.close()
    }    
}

export const insertDocument = async (
  res: Response<any, Record<string, any>, number>, 
  collection:string,
  document:Object) => {

    const client = getConnection();
    try {
      await client.connect()
      const result = await client.db('vuelaFacil').collection(collection).insertOne(document)
      //result es una promesa que se resuelve al documento insertado. Si no se resuelve el catch captura el error
      console.log(`se inserto un documento con el id ${result.insertedId}`)
      res.status(201)
      res.send(`se inserto un documento con el id ${result.insertedId}`)
    } catch (error) {
      res.status(501)
      res.send('No se pudo insertar el documento')
      console.log(error)
    } finally {
      client.close()
    }
}