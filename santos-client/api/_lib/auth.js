const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const buildToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET || 'lab-activity-7-secret',
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

const readBody = async (req) => {
  if (typeof req.body === 'object' && req.body !== null) {
    return req.body
  }

  if (!req || !req.method || req.method === 'GET') {
    return {}
  }

  return {}
}

module.exports = {
  bcrypt,
  buildToken,
  readBody,
  sanitizeUser,
}
