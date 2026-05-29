const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const buildToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

const sanitizeUser = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  section: user.section,
  email: user.email,
  username: user.username,
  contactNumber: user.contactNumber,
  age: user.age,
  role: user.role,
  gender: user.gender,
  status: user.status,
  shortBio: user.shortBio,
})

const signUp = async (req, res) => {
  try {
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
    } = req.body

    const [firstName = '', ...lastNameParts] = (fullName || '').trim().split(/\s+/)
    const lastName = lastNameParts.join(' ')

    if (!firstName || !lastName) {
      return res.status(400).json({ message: 'Please provide your full name.' })
    }

    const existingUser = await User.findOne({
      $or: [{ email: email?.toLowerCase() }, { username }],
    })

    if (existingUser) {
      return res.status(409).json({ message: 'Email or username already exists.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      section,
      email,
      username,
      password: hashedPassword,
      contactNumber,
      age,
      shortBio,
      role: role || 'Viewer',
      gender: gender || 'Prefer not to say',
    })

    res.status(201).json({
      message: 'User registered successfully.',
      token: buildToken(user),
      user: sanitizeUser(user),
    })
  } catch (error) {
    res.status(500).json({ message: error.message || 'Unable to register user.' })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email?.toLowerCase() })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }

    if (user.role === 'Viewer') {
      return res.status(403).json({ message: 'Viewer accounts cannot log in.' })
    }

    res.json({
      message: 'Login successful.',
      token: buildToken(user),
      user: sanitizeUser(user),
    })
  } catch (error) {
    res.status(500).json({ message: error.message || 'Unable to sign in.' })
  }
}

const getUsers = async (_req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 })
    res.json(users.map(sanitizeUser))
  } catch (error) {
    res.status(500).json({ message: error.message || 'Unable to fetch users.' })
  }
}

module.exports = {
  getUsers,
  signIn,
  signUp,
}
