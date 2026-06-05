const connectDb = require('./_lib/db')
const User = require('./_lib/User')
const { bcrypt, buildToken, sanitizeUser } = require('./_lib/auth')

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

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  try {
    await connectDb()

    const { email, password } = req.body || {}

    const user = await User.findOne({ email: email?.toLowerCase() })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }

    const passwordMatches = await bcrypt.compare(password || '', user.password)

    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }

    if (user.role === 'Viewer') {
      return res.status(403).json({ message: 'Viewer accounts cannot log in.' })
    }

    return res.json({
      message: 'Login successful.',
      token: buildToken(user),
      user: sanitizeUser(user),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Unable to sign in.' })
  }
}
