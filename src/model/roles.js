import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  title: {
    type: String,
    requrired: true,
  },
  desrcription: {
    type: String,
  },
  minExperience: {
    type: Number,
  },
  department: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Department",
  },
  minCompensation: {
    type: Number,
  },
  maxCompensation: {
    type: Number,
  },
});


const Roles = mongoose.model('Role',roleSchema)


export default Roles