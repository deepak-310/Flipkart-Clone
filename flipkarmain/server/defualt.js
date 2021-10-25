import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";
// import mongoose  from "mongoose";

const DefualtData=async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("data importe succeswfully");       
    }catch(error){
        console.log('Error:',error.message);
    }

}
export default DefualtData;