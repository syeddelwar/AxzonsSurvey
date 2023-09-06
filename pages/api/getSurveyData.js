import clientPromise from "../../lib/mongodb";

export default async function (req, res){
    const client = await clientPromise
    const cursor = client.db("survey").collection("survey-taker-info").find({})
    const data = await cursor.toArray()
    res.send(data)
}