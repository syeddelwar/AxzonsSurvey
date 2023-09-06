import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function (req, res){
    const client = await clientPromise
    const _id = req.body._id
    const data = await client.db("survey").collection("survey-taker-info").findOne({_id: new ObjectId(_id)})
    res.send(data)
}