import { MongoClient } from 'mongodb';
import config from '../config/config';
require('dotenv').config()

// Reemplazadas por Variables de entorno en config.ts
//const username = process.env.DB_USER || 'admin'
//const password = process.env.DB_PASSWORD || 'admin1234'
//const database = 'vuelaFacil'

const getConnection = ():MongoClient => {
  const uri :string = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0732.bpocl.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority` ;
  const client = new MongoClient(uri)
  //check if options need to be passed to MongoClient constructor
  return client
}

export default  getConnection




