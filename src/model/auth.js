import mongoose from 'mongoose';


const authSchema = mongoose.Schema({
    accessToken:{
        type:String,
    },
    loginAt:{
        type:Date,
        default: Date.now()
    },
    logoutAt:{
        type:Date
    },
    expiresAt:{
        type:Date,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Auth = mongoose.model('Auth',authSchema)

export default Auth;