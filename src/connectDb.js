import { MongoClient } from "mongodb"
import { MongoUri } from "../secrets.js"

const client = new MongoClient(MongoUri)

export const db = client.db("bite-buster")