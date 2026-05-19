const express = require('express')
const {
  getUsers,
  signIn,
  signUp,
} = require('../controllers/userController')

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/users', getUsers)

module.exports = router
