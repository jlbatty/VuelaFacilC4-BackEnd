import { Response } from "express-serve-static-core";
import getConnection from "../services/mongo.service";


export const findDocumentById = async (
  res: Response<any, Record<string, any>, number>,
  query: Object,
  collection: string) => {
  const client = getConnection()
  try {
    await client.connect()
    const document = await client.db('vuelaFacil').collection(collection).findOne(query)
    if (document) {
      res.status(200)
      res.send(document)
    } else {
      res.status(404).json({ status: 404, message: 'No se encontró el documento' })
    }
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}

export const findDocuments = async (
  res: Response<any, Record<string, any>, number>,
  query: Object,
  collection: string) => {

  const client = getConnection()
  try {
    await client.connect()
    const cursor = await client.db('vuelaFacil').collection(collection).find(query)
    if ((await cursor.count()) === 0) {
      res.status(404)
      res.send('No se encontró ningún documento')
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
  collection: string,
  document: Object) => {

  const client = getConnection();
  try {
    await client.connect()
    const result = await client.db('vuelaFacil').collection(collection).insertOne(document)
    //result es una promesa que se resuelve al documento insertado. Si no se resuelve el catch captura el error
    console.log(`se inserto un documento con el id ${result.insertedId}`)
    res.status(201).json({
      status: 201,
      _id: result.insertedId,
      message: `se inserto un documento con el id ${result.insertedId}`
    })
  } catch (error) {
    res.status(501)
    res.send('No se pudo insertar el documento')
    console.log(error)
  } finally {
    client.close()
  }
}
export const deleteDocument = async (
  res: Response<any, Record<string, any>, number>,
  query: Object,
  collection: string) => {
  const client = getConnection()
  try {
    await client.connect()
    const document = await client.db('vuelaFacil').collection(collection).findOne(query)

    if (document) {
      const document = await client.db('vuelaFacil').collection(collection).deleteOne(query)
      if (document) {
        res.status(200).json({ message: 'se borró con éxito el documento', status: 200 })
      }
    } else {
      res.status(404)
      res.send('El documento que esta intentando borrar no existe')
    }
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}
export const updateDocument = async (
  res: Response<any, Record<string, any>, number>,
  query: Object,
  collection: string,
  document1: Object) => {
  const client = getConnection()
  try {
    await client.connect()
    const document = await client.db('vuelaFacil').collection(collection).updateOne(query, { $set: document1 })

    if (document) {

      res.status(200)
      res.send(`se actualizaron correctamente los parametros`)

    } else {
      res.status(404)
      res.send('no se pudieron actualizar los parametros')
    }
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}

export const pushDocument = async (
  res: Response<any, Record<string, any>, number>,
  query: Object,
  collection: string,
  document1: Object) => {
  const client = getConnection()
  try {
    await client.connect()
    const document = await client.db('vuelaFacil').collection(collection).updateOne(query, { $push: document1 })

    if (document) {

      res.status(200)
      res.send(`se actualizaron correctamente los parametros`)

    } else {
      res.status(404)
      res.send('no se pudieron actualizar los parametros')
    }
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}