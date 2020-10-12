const User = require('../models/user')
const bcrypt = require('bcryptjs')

const userController = {

    //Create new user.
    createUser: async (req, res) => {
        const { email, username, password } = req.body
        const userExists = await User.findOne({ username })
        const passHash = bcrypt.hashSync(password, 10)

        if (userExists) {
            res.json({ success: false, error: 'user exists' })
        } else {
            const newUser = new User({
                email, username, password:passHash
            })
            var user = await newUser.save()
            res.json({
                success:true, user
            })
        }
    },

    //List of all users. 
    allUsers: async(req, res) =>{
        const listUsers = await User.find()
        res.json({
            success:true, User: listUsers
        })
    }
}

module.exports = userController