import mongoose from 'mongoose'
import { unique } from 'next/dist/build/utils'


const userSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        require:true,
    },

}, {timestamps:true});



export const User = mongoose.models.User || mongoose.model('User',userSchema)


export default User;