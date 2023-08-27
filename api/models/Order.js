const mongoose = require('mongoose')
const { Timestamps } = require('mongodb')
const { Schema } = mongoose
const orderSchema = new mongoose.Schema({
    products: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
    }],
    totalPrice: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)