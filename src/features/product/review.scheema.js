import mongoose from "mongoose";

export const reviewScheema = new mongoose.Schema({
product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'product'

},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
rating: Number
 



})