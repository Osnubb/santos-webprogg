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

    const {
      fullName,
      section,
      email,
      username,
      contactNumber,
      age,
      password,
      shortBio,
      role,
      gender,
    } = req.body || {}

    const [firstName = '', ...lastNameParts] = (fullName || '').trim().split(/\s+/)
    const lastName = lastNameParts.join(' ')

    if (!firstName || !lastName) {
      return res.status(400).json({ message: 'Please provide your full name.' })
    }

    if (!email || !username || !contactNumber || !age || !password || !section) {
      return res.status(400).json({ message: 'Please complete all required fields.' })
    }

    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }],
    })

    if (existingUser) {
      return res.status(409).json({ message: 'Email or username already exists.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      section,
      email: email.toLowerCase(),
      username,
      password: hashedPassword,
      contactNumber,
      age: Number(age),
      shortBio,
      role: role || 'Editor',
      gender: gender || 'Prefer not to say',
    })

    return res.status(201).json({
      message: 'User registered successfully.',
      token: buildToken(user),
      user: sanitizeUser(user),
    })
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Unable to register user.' })
  }
}
