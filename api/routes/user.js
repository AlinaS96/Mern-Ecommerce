const express = require('express')
const router = express.Router()
const { getUser, updateUser, deleteUser, getUsers} = require('../controller/userController')
const {verifyAdmin,verifyUser} = require('../utils/verifyToken')

//get
router.get('/:id', verifyAdmin, getUser)

//update
router.put('/:id', verifyUser,updateUser)

//delete
router.delete('/:id', verifyAdmin, deleteUser)

//get Users
router.get('/', verifyAdmin, getUsers)

//get all users per month of current year 
module.exports = router