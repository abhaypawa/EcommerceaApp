import mongoose from "mongoose"
export const likeSchema = new  mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    likeable:{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'on_model'
    },
    on_model:{
        type:String,
        enum:['Product', 'Category']
    }

}).pre('save', (next)=>{

    console.log("new like comming in")
    next()
})
.post('save', (doc)=>{
    console.log("like is saved")
    console.log(doc)
}).pre('find', (next)=>{
console.log("Retriving Likes")
    next();
}).post('find', (doc)=>{
    console.log("post find")
    console.log(doc)
})