const Cart= require('../models/Cart')
const Product = require('../models/Product')
async function addToCart(req,res,next){
   try{
    const cart = new Cart({...req.body,user:req.user.id});
    await cart.save()
    res.status(200).send('Cart has been created')
   }catch(err){
    next(err)
   }
}

async function getCart(req,res,next){
    try{
     const cart = await Cart.findOne({user:req.params.id});
     res.status(200).send(cart)
    }catch(err){
     next(err)
    }
 }

 async function updateCart(req,res,next){
       try{
             
         const cart = await Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         
         res.status(200).send(cart)
        }
       catch(err){
        next(err)
       }
   }
//  async function updateCart(req,res,next){
//     try{
//       console.log(req.user)
//      if(req.body.products){
//       const products = req.body.products
//       const ItemInCart= await Cart.find({"products.productId":{$in:[products.productId]},user:req.user.id})
//       // const isItemInCart= await Cart.find({products:{productId:products.productId}})

//       if(ItemInCart.isEmpty){     
//       const cart = await Cart.findByIdAndUpdate(req.params.id,{$push:req.body},{new:true});
//       }else{
//          const cart = await Cart.updateOne({_id:req.params.id},{"products.productId":{$in:[products.productId]}},{$inc:{quantity:1}},{new:true});
//       }
//       res.status(200).send(cart)
//      }
//     }catch(err){
//      next(err)
//     }
//  }

 async function deleteCart(req,res,next){
    try{
     await Cart.findByIdAndDelete(req.params.id);
     res.status(200).send('Cart has been deleted')
    }catch(err){
     next(err)
    }
 }


 async function getCartPrice(req,res,next){
   try{
      const cart = await Cart.find({ user: req.user.id })
      const cartProducts = cart[0].products
      let cartPrice = 0;
      const productPrice = await Promise.all(cartProducts.map(async (product) => {
         const products= await Product.findById(product.productId)
         return cartPrice += products.price * product.quantity
      })) 
      console.log(cartPrice)
      res.status(200).send(String(cartPrice))
   }catch(err){
      next(err)
   }
 }
module.exports= { addToCart,getCart,updateCart, deleteCart, getCartPrice}