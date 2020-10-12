const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/users')
.post(userController.createUser) //Create new user
.get(userController.allUsers) //List of all users

module.exports = router