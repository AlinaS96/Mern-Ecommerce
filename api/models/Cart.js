const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose
const cartSchema = new mongoose.Schema({
    products: [{
        productId: { type: String, ref:"Product" },
        title:{ type: String }, 
        img:{ type: String }, 
        color:{ type: String }, 
        size:{ type: String},
        quantity: { type: Number, default: 1 },
        price: {type:Number }
    }],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // totalPrice: {type:Number },
    // totalQuantity: {type:Number }
}, { timestamps: true })

module.exports = mongoose.model('Cart', cartSchema)