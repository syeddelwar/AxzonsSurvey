// Zubayer

import { ObjectId } from 'mongodb'
import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
    const client = await clientPromise
    const result = await client.db("survey").collection("survey-taker-info").deleteOne({_id: new ObjectId("64f5c6d03b8c106c23407f98")})
    res.send(result)
}