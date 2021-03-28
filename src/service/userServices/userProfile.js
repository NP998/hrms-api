import UserProfile from "../../model/userProfile"

export const createProfile=(data)=>{
    const userProfile=new UserProfile(data)
    return userProfile.save().then(data=>data._id)
}