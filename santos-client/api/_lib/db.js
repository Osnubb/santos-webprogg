const mongoose = require('mongoose')

let cached = global.mongooseCache

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null }
}

const fallbackMongoUri =
  'mongodb+srv://regaladosnts_db_user:R1WYsY9yPlggDmuJ@cluster0.rccjrej.mongodb.net/?appName=Cluster0'

async function connectDb() {
  if (cached.conn) {
    return cached.conn
  }

  const mongoUri = process.env.MONGO_URI || fallbackMongoUri

  if (!mongoUri) {
    throw new Error('MONGO_URI is not set in the Vercel environment.')
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri).then((connection) => connection)
  }

  cached.conn = await cached.promise
  return cached.conn
}

module.exports = connectDb
