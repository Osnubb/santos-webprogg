const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()
const allowedOrigins = [
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
  'http://localhost:5173',
  'http://localhost:5174',
]

const clientOrigin = process.env.CLIENT_URL
if (clientOrigin && !allowedOrigins.includes(clientOrigin)) {
  allowedOrigins.push(clientOrigin)
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Origin not allowed by CORS'))
    },
    credentials: true,
  })
)
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'Lab Activity 7 backend is running.' })
})

app.use('/api', userRoutes)

const port = process.env.PORT || 5000

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  })
