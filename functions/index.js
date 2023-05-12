import functions from 'firebase-functions'
import express from "express"
import cors from "cors"
import { getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } from "./src/restaurants.js"

//defining app.
const app = express() 
app.use(cors())
app.use(express.json())
// const PORT = 3000


//routes will go here..
app.get("/",(req,res) =>{
    res.send('Hello!')
})

//end points..

// http://127.0.0.1:5001/bite-buster-api/us-central1/api/restaurants
// http://127.0.0.1:3000/restaurants


app.get("/restaurants/:dayName", getAllRestaurants)
app.post("/restaurants", addRestaurant)
app.patch("/restaurants/:docId",updateRestaurant)
app.delete("/restaurants/:docId",deleteRestaurant)

// app.listen(3000, () => console.log(`Listening on http://localhost:3000...`))



export const api = functions.https.onRequest(app) // exports our cloud function