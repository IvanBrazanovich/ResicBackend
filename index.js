// Imports
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Import models
import User from './models/User.model.js'
import Message from './models/Message.model.js'
import Service from './models/Service.model.js'
import Rating from './models/Rating.model.js'

// Configuring the DOTENV package
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000

// Create an instance of the Express app (of a class/object)
const app = express()

// Connect to MongoDB
await mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Connection error:', error)
  })

// Setting up a basic route using Express
app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

// Starting the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
