require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose')

const app = express()

//middleware
app.use(express.json())

app.use((req, res , next) => {
   console.log(req.path , req.method)
   next()
})


//routes
app.use('/api/workouts',workoutRoutes)


//connect

mongoose.connect(process.env.MONGO_URI)
   .then(() => {})
   .catch((error) =>{
    console.log(error)
   })


app.listen(process.env.PORT, () => {
    console.log(" connected to DB and listening to the port ",process.env.PORT)
})




