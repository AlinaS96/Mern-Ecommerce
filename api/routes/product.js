const express = require('express')
const router = express.Router()
const { createProduct, getProduct, updateProduct, deleteProduct, getProducts } = require('../controller/productController')
const { verifyAdmin,verifyUser } = require('../utils/verifyToken')

//create
router.post('/', verifyAdmin, createProduct)

//get
router.get('/:id', getProduct)

//update
router.put('/:id', verifyAdmin, updateProduct)

//delete
router.delete('/:id', verifyAdmin, deleteProduct)

//get products, by category and newest as welladd quey
router.get('/', getProducts)



module.exports = router