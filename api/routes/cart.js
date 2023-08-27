const express = require('express')
const router = express.Router()
const { addToCart,getCart,updateCart, deleteCart, getCartPrice} = require('../controller/cartController')
const { fetchUser,verifyUser } = require('../utils/verifyToken')

//create
router.post('/', fetchUser, addToCart)

//get user cart
router.get('/find/:id', verifyUser, getCart)

//update
router.put('/:id', fetchUser, updateCart)

//delete
router.delete('/:id', fetchUser, deleteCart)

//get user cart price
router.get('/price', fetchUser, getCartPrice)


module.exports = router