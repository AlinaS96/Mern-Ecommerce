const mongoose = require('mongoose')
const { Timestamps } = require('mongodb')
const { Schema } = mongoose
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type:String,
        default:false
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)