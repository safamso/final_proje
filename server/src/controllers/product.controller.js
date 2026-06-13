import { Product } from "../models/product.model.js";
export const getProducts = async(req,res)=>{
    try{
        const products = await Product.find();
      return res.status(200).json({
        products,
        success:true,
        message:"Products fetched successfully"
       })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });

    }
};
export const createProducts = async(req,res)=>{
    try{
        const product = await Product.create(req.body);
           res.status(201).json({
            success:true,
            product,
            message:"Product created successfully"
        });

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })

    }
}