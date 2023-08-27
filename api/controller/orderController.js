const Order = require('../models/Order')
const Cart = require('../models/Cart')
const Product = require('../models/Product')

async function addOrder(req, res, next) {
   try {
      const cart = await Cart.find({ user: req.user.id })
      const cartProducts = cart[0].products
      let totalPrice = 0;
      const productPrice = await Promise.all(cartProducts.map(async (product) => {
         const productID = await Product.findById(product.productId)
         return totalPrice += productID.price * product.quantity
      }))

      const order = new Order({ ...req.body, user: req.user.id, totalPrice: totalPrice, products: cartProducts });
      await order.save()
      res.status(200).send(order)
   } catch (err) {
      next(err)
   }
}

async function getOrder(req, res, next) {
   try {
      const order = await Order.find(req.params.id);
      res.status(200).send(order)
   } catch (err) {
      next(err)
   }
}

async function getUserOrder(req, res, next) {
   try {
      const order = await Order.find({ user: req.params.id });
      res.status(200).send(order)
   } catch (err) {
      next(err)
   }
}

async function updateOrder(req, res, next) {
   try {
      const order = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).send(order)
   } catch (err) {
      next(err)
   }
}

async function deleteOrder(req, res, next) {
   try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).send('Order has been deleted')
   } catch (err) {
      next(err)
   }
}

async function getIncome(req, res, next) {
   try {
      const orders = await Order.find();
      const pricesEachMonth = orders.map(order => { 
         const date = new Date(order.createdAt); 
         return { month: date.getMonth(), earning: order.totalPrice } 
      })
      const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      let earnings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < pricesEachMonth.length; i++) {
         for (let j = 0; j < month.length; j++) {
            if (pricesEachMonth[i].month == month[j]) {
               earnings[j] = earnings[j] + pricesEachMonth[i].earning
            } else {
               earnings[j] = 0
            }
         }
      }
      res.status(200).send(earnings)
   } catch (err) {
      next(err)
   }
}

async function getOrders(req, res, next) {
   try {
      const orders = await Order.find();
      res.status(200).send(orders)
   } catch (err) {
      next(err)
   }
}


module.exports = { addOrder, getOrder, getUserOrder, updateOrder, deleteOrder, getOrders, getIncome }