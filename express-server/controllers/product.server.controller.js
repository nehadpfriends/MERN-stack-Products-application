
import mongoose from 'mongoose';

//import models
import Product from '../models/product.server.model';

export const getProducts = (req,res) => {
  Product.find().exec((err,products) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Products fetched successfully',products});
  });
}

export const addProduct = (req,res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  console.log(newProduct);
  newProduct.save((err,product) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Product added successfully',product});
  })
}

export const updateProduct = (req,res) => {
  Product.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,product) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(product);
    return res.json({'success':true,'message':'Updated successfully',product});
  })
}

export const getProduct = (req,res) => {
  Product.find({_id:req.params.id}).exec((err,product) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(product.length){
      return res.json({'success':true,'message':'Product fetched by id successfully',product});
    }
    else{
      return res.json({'success':false,'message':'Product with the given id not found'});
    }
  })
}

export const deleteProduct = (req,res) => {
  Product.findByIdAndRemove(req.params.id, (err,product) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':product.productName+' deleted successfully'});
  })
}
