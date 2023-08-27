const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function register(req, res, next) {
    try {
        const {password,username,email} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const user = new User({ password: hash, username:username, email:email })

       await user.save()
        res.status(200).send('User has been created')
    } catch (err) {
        next(err)
    }
}

async function login(req, res, next) {

    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) res.status(404).send('User not found')
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) res.status(404).send('Incorrect email or password')

        const token = jwt.sign({ id: user.id, admin: user.isAdmin }, process.env.JWT)
        const { isAdmin, password, ...otherDetails } = user._doc
        res.cookie("access_token", token, { httpOnly: true }).status(200).send({ details: { ...otherDetails } })
    } catch (err) {
        next(err)
    }
}

const logout = (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (token) {
            res.clearCookie("access_token");
            res.status(200).send('cookie cleared')
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { register, login, logout }