import { db } from "./connectDb.js" //connection to database thru connectDb.js
import { ObjectId } from "mongodb" 

const coll = db.collection("restaurants")



//GET
export async function getAllRestaurants(req, res) {
    const {dayName} = req.params

    const restaurants = await coll
        .find( {day: dayName} )
        .toArray()
    res.send(restaurants)
}




//POST
export async function addRestaurant(req,res) {
    const newRestaurant = req.body
    await coll.insertOne(newRestaurant)
    res.status(201).send({message: "New Restaurant added"})
}

//DELETE
export async function deleteRestaurant(req,res) {
    const docId = { "_id": new ObjectId(req.params.docId)}
    await coll.deleteOne(docId)
    res.status(201).send({message:"Restaurant has been deleted"})
}

//UPDATE
export async function updateRestaurant(req, res) {
    const docId = {"_id": new ObjectId(req.params.docId)}
const updateRestaurant = {$set: req.body}
const returnOption = { returnNewDocument: true}

const query = await coll.findOneAndUpdate(docId, updateRestaurant, returnOption)

await coll.findOneAndUpdate(
    {"_id": docId},
    {$set:{updateRestaurant}}
)
res.status(201).send({message: "Restaurant has been updated"})
console.table(query.value)
}





