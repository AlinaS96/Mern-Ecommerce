const mongoose = require('mongoose')
const { Timestamps } = require('mongodb')
const { Schema } = mongoose
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: [String] },
    size: { type: [String] },
    color: { type: [String] },
    price: { type: Number, required: true },
    inStock:{type:Boolean, default:true}
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)