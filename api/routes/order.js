const express = require('express')
const router = express.Router()
const { addOrder,getOrder,getUserOrder,updateOrder, deleteOrder, getOrders, getIncome} = require('../controller/orderController')
const { fetchUser, verifyUser,verifyAdmin } = require('../utils/verifyToken')

//create
router.post('/', fetchUser, addOrder)

// //get
// router.get('/:id', fetchUser, getOrder)

//get user order
router.get('/find/:id', verifyUser, getUserOrder)

//update
router.put('/:id', verifyAdmin, updateOrder)

//delete
router.delete('/:id', verifyAdmin, deleteOrder)

//get all Orders
router.get('/', verifyAdmin, getOrders)


//get monthly income
router.get('/monthlyIncome', verifyAdmin, getIncome)


module.exports = router