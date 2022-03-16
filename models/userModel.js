const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLenght:3,
        maxLength:50,
        toLowerCase:true
    },
    userName:{
        type:String,
        required:true,
        lowerCase:true,
        trim:true,
        minLenght:3,
        maxLength:50,
        unique:true
    },
    email:{
        type:String,
        required:true,
        lowerCase:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        lowerCase:true,
        minlength:6,
        maxlength:15,
    }
},({collection:"user",timestamps:true}))

const User = mongoose.model("User",userSchema)

module.exports = User