import mongoose from 'mongoose';



const userProfileSchema =  new mongoose.Schema({
    gender:{
        type:Number,
    },
    dob:{
        type: Date,
    },
    address:{
        type: Object,
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    },
    role:{
        type:Object,
        required:true
    },
    joining:{
        type:Date,
        required:true,
    }

})

const UserProfile = mongoose.model('UserProfile',userProfileSchema)


export default UserProfile;