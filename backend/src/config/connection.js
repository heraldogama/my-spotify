import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://heraldogama:pYKLnmpuA7QRSqZo@learning.lxgqp.mongodb.net/?retryWrites=true&w=majority&appName=Learning";
const client = new MongoClient(uri);
export const database = client.db("my_spotify");
