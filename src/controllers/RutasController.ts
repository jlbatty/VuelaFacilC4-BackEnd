import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ObjectId } from "mongodb";

import getConnection from "../services/mongo.service"

interface Aeropuerto {
  nombre: string;
  ciudad: string;
  IATA: string;
}
interface Ruta {
  salida: Aeropuerto;
  llegada: Aeropuerto;
  duracionVuelo: string;
  distancia: number;
}

export const obtenerRutaPorId = async (
  req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>, 
  res: Response<any, Record<string, any>, number>)
  : Promise<void> => {

  //creo un cliente de Mongo
  const client = getConnection()
  try{
    //el id se le debe pasar como un objeto de tipo ObjectId
    const id = new ObjectId(req.params.id) 
    //Armo un objeto con la query, o condiciones de filtro de la busqueda
    const query = { "_id": id}
    //Luego conecto y ejecuto la query
    await client.connect();
    const ruta = await client.db('vuelaFacil').collection('rutas').findOne(query)
    if (ruta){
      //si sí encontró la ruta, envía un status y la información encontrada
      res.status(200)
      res.send({ruta: ruta})
    } else {
      //si no encuentra nada, hay que enviar un mensaje
      console.log('No se encontro ninguna ruta')
    }
  }catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}

// export const obtenerRutas = async (req, res) =>{
//   //acá pongo la lógica del método
// }
// export const agregarRuta = (req, res) =>{
//   //acá pongo la lógica del método
// }
// export const obtenerRutaPorId = (req, res) =>{
//   //acá pongo la lógica del método
// }
// export const actualizarRutas = (req, res) =>{
//   //acá pongo la lógica del método
// }
// export const eliminarRutas = (req, res) =>{
//   //acá pongo la lógica del método
// }
