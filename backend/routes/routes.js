const express = require('express')
const productController = require('../controllers/productController')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/users')
.post(userController.createUser) //Create new user
.get(userController.allUsers) //List of all users

router.route('/products')
.post(productController.addProduct)//agregar producto a la db

module.exports = router