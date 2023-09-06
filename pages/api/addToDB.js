// Zubayer

import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
    const client = await clientPromise
    const db = client.db("survey")
    const result = await db.collection("survey-taker-info").insertOne(req.body)
    console.log(req.body)
    console.log(result)
    res.send(result)
}