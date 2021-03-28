import bcrypt from 'bcrypt';
import config from '../../config';
import User from '../../model/user';

//this is for return data in userController and use that in redux
const userById=(id)=>{
    return User.findById(id).then(data=>data)
}

const encryptPassword = (password) => {
    return bcrypt.hash(password,config.salt_rounds)
}



const createUser = (data) => {
    const user = new User(data)
    return user.save()
    .then(user => user._id)
    .catch(error =>{
        throw new UserCreationError("User Creation Failed")
    })

}


module.exports = {
    encryptPassword,
    createUser,
    userById
}