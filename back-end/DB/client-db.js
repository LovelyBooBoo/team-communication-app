import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();


const uri = process.env.MONGO_URI;

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// 'testing' is the name of my database within the cluster I have connected to
const db = client.db("confidex-users");

export { client, db };