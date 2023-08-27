const User = require('../models/User')
const bcrypt = require('bcrypt')

async function getUser(req, res, next) {
   try {
      const user = await User.findById(req.params.id);
      const { password, isAdmin, ...otherDetails } = user._doc
      res.status(200).send(otherDetails)
   } catch (err) {
      next(err)
   }
}

async function updateUser(req, res, next) {
   try {
      if (req.body.password) {
         const salt = bcrypt.genSaltSync(10)
         const hash = bcrypt.hashSync(req.body.password, salt)
         req.body.password = hash
         const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
         res.status(200).send(user)
      } else {
         const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
         res.status(200).send(user)
      }
   } catch (err) {
      next(err)
   }
}

async function deleteUser(req, res, next) {
   try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send('User has been deleted')
   } catch (err) {
      next(err)
   }
}

async function getUsers(req, res, next) {
   try {
      const users = await User.find();
      res.status(200).send(users)
   } catch (err) {
      next(err)
   }
}

module.exports = { getUser, updateUser, deleteUser, getUsers }