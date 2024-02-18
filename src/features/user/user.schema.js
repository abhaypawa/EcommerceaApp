import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name:{type: String,maxLength:[25, "Name cant be greater than 25 Charectors"]},
    email: {type: String, Unique: true, required: true,
     match:[/.+\@.+\../, "Please enter a valid email"]
    },
    password: {type:String,
        // validate:{
        //     validator: function(value){
        //         return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value)
        //     },
        //     message:"Passwordshould be between 8-12 charectors and have aspecial charector"

        // }
    },
    type: {type: String, enum: ['Customer', 'Seller']}
})