import mongoose from "mongoose";
import { categorySchema } from "../features/product/category.Schemas.js";
// import dotenv from "dotenv";

// dotenv.config();
// const url = process.env.DB_URL;
export const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect("mongodb+srv://abhayrpawar123:N0QJEgGmhcCf9Bn7@cluster0.yzduzus.mongodb.net/?retryWrites=true&w=majority")
        console.log("Mongodb connected using mongoose");
        addCategories();
    }catch(err){
        console.log("Error while connecting to db");
        console.log(err);
    }
}

async function addCategories(){
    const CategoryModel = mongoose.model("Category", categorySchema)
    const categories = CategoryModel.find()
    if(!categories||(await categories).length==0){
        await CategoryModel.insertMany([{name:'Books'},{name:'Clothing'},{name:'Electronics'}])

    }
    console.log("Categories added")
}
