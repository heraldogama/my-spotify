import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.STRING_CONNECTION_MONGODB;
const client = new MongoClient(uri);
export const database = client.db("my_spotify");
