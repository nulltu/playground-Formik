const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const userController = {

    //Create new user.
    //no olvidar agregar los otros datos de el modelo
    createUser: async (req, res) => {
        console.log(req.body)
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
            jsonwebtoken.sign({...newUser}, process.env.SECRETORKEY,{},(error, token)=>{
                if(error){
                    res.json({
                        success: false, error
                    })
                } else{
                    res.json({
                        success:true, username:newUser.username, token
                    })
                }
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