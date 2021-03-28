import mongoose from 'mongoose';


const candidateSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        validate:{
            validator:(value) => /\d{10}/.test(value)
        },
        message: props => `${props.value} is not a valid phone number`
    },
    socialMediaLink:{
        linkedIn:{
            type:String
        },
        resumeLink:{
            type:String,
        },
        portfolio:{
            type: String
        }
    },
    applicationStatus:{
        type:Number,
        validate:{
            validator:(value) => Object.values(applicationStatus).includes(value)
        },
        message: props => `${props.value} is not a valid application status`
    },
    designation:{
        type:String,
        required:true,
    },
    appliedRole:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Role'
    }
})


const Candidate = mongoose.model('Candidate',candidateSchema)


export default Candidate;