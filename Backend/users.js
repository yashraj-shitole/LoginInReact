const mongoose =require('mongoose')
mongoose.set("strictQuery", false);


const UserSchema=new mongoose.Schema({
    username:String,
    password:String
})

const UserModel=mongoose.model("login",UserSchema)

module.exports=UserModel