import { MongoClient } from 'mongodb';

const username = 'admin'
const password = 'admin1234'
const database = 'vuelaFacil'

const getConnection = ():MongoClient => {
  const uri :string = `mongodb+srv://${username}:${password}@cluster0732.bpocl.mongodb.net/${database}?retryWrites=true&w=majority` ;
  const client = new MongoClient(uri)
  //check if options need to be passed to MongoClient constructor
  return client
}

export default  getConnection




