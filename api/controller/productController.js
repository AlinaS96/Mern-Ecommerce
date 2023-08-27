const Product = require('../models/Product')

async function createProduct(req,res,next){
   try{
    const product = new Product(req.body);
    await product.save()
    res.status(200).send('Product hasbeen created')
   }catch(err){
    next(err)
   }
}

async function getProduct(req,res,next){
    try{
     const product = await Product.findById(req.params.id);
     res.status(200).send(product)
    }catch(err){
     next(err)
    }
 }

 async function updateProduct(req,res,next){
    try{
     const product = await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).send(product)
    }catch(err){
     next(err)
    }
 }

 async function deleteProduct(req,res,next){
    try{
     await Product.findByIdAndDelete(req.params.id);
     res.status(200).send('Product has been deleted')
    }catch(err){
     next(err)
    }
 }


 async function getProducts(req,res,next){
   try{
    const products = await Product.find();
    res.status(200).send(products)
   }catch(err){
    next(err)
   }
}



module.exports= {createProduct, getProduct, updateProduct, deleteProduct, getProducts}