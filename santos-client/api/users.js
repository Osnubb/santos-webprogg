const connectDb = require('./_lib/db')
const User = require('./_lib/User')
const { sanitizeUser } = require('./_lib/auth')

const applyCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

module.exports = async (req, res) => {
  applyCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  try {
    await connectDb()

    const users = await User.find().sort({ createdAt: -1 })
    return res.json(users.map(sanitizeUser))
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Unable to fetch users.' })
  }
}
