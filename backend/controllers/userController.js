const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const userController = {

    //Create new user.
    //no olvidar agregar los otros datos de el modelo
    createUser: async (req, res) => {

        const { email, username, password } = req.body
        const userExists = await User.findOne({ username })
        const passHash = bcrypt.hashSync(password, 10)

        if (userExists) {
            res.json({
                success: false,
                error: 'user exists'
            })
        } else {
            const newUser = new User({
                email, username, password: passHash
            })
            var user = await newUser.save()
            jsonwebtoken.sign({ ...newUser }, process.env.SECRETORKEY, {}, (error, token) => {
                if (error) {
                    res.json({
                        success: false,
                        error: 'an unexpected error occurred'
                    })
                } else {
                    res.json({
                        success: true,
                        username: newUser.username, role: newUser.role, token
                    })
                }
            })

        }
    },

    login: async (req, res) => {
        const { username, password } = req.body
      
        const userExistsLog = await User.findOne({ username })
        if (!userExistsLog) {
            res.json({
                success: false,
                error: 'Wrong username or password.'
            })
        } else {
            const passwordMatches = bcrypt.compareSync(password, userExistsLog.password)
            if (!passwordMatches) {
                res.json({
                    success: false,
                    error: 'Wrong username or password.'
                })
            } else {
                jsonwebtoken.sign({ ...userExistsLog }, process.env.SECRETORKEY, {}, (error, token) => {
                    if (error) {
                        res.json({
                            success: false, error: 'error in request'
                        })
                    } else {
                        res.json({
                            success: true, token, username: userExistsLog.username, role:userExistsLog.role
                        })
                    }
                })

            }
        }
    },

    //List of all users. 
    allUsers: async (req, res) => {

        const listUsers = await User.find()
        res.json({
            success: true, User: listUsers
        })
    }
}

module.exports = userController