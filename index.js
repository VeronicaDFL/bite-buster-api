import express from "express"
import cors from "cors"
import { getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } from "./src/restaurants.js"

const PORT = 3001

const app = express() //defining app.

app.use(cors())
app.use(express.json())

//routes will go here..

app.get("/",(req,res) =>{
    res.send('Hello')
})

//end points..

app.get("/restaurants", getAllRestaurants)
app.post("/restaurants", addRestaurant)
app.patch("/restaurants/:docId",updateRestaurant)
app.delete("/restaurant/:docId",deleteRestaurant)


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})