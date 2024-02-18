import mongoose from "mongoose";
import { UserSchema } from "./user.schema.js";

const Usermodel = mongoose.model('User', UserSchema)


export default class UserRepository{
 async resetPassword(userID, hashedPassword){
    try{

        let user =  await Usermodel.findById(userID)
        if(user){
        user.password = hashedPassword;
        user.save();
        }else{
            throw new Error("No such user found")
        }
        

    }catch(err){
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500); 
    }

 }




    async signUp(user){
    // create instance of modle
try{
    const newUser = new Usermodel(user)
    await newUser.save();
    return newUser;

}catch(err){
    if(err instanceof mongoose.Error.ValidationError){
        throw err;
    }else{
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500);
    }
     
}
    }

    async signIn(email, password){
        try{
        return await  Usermodel.findOne({email, password})
        
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500); 
        }


    }
    async findByEmail(email) {
       
        return await Usermodel.findOne({email});
      }catch(err){
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500);
      }
      }
