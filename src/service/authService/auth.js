import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import Auth from '../../model/auth';
import { InternalServerError,AuthorizationError } from '../../utils/errors';

const comparePassword = (password,hashedPassword) => bcrypt.compare(password,hashedPassword)

const generateAccessToken = async (userContext) =>{
        const accessToken = jwt.sign({
            username: userContext.userName,
            email:userContext.email,
            uuid: userContext._id
        },config.SECRET,{
            expiresIn:config.TOKEN_TIME
        })

        const newAuth = new Auth({
            accessToken:accessToken,
            expiresAt:new Date(new Date().getTime() + (config.TOKEN_TIME * 1000)),
            user: userContext._id
        })

        return newAuth.save()
                      .then(data => data.accessToken)
                      .catch(err => {throw new InternalServerError("Access Token generation failed")
        })
}

const authenticate = (req,res,next) =>{
    const auth  = req.get('Authorization')
    if(!auth) throw new AuthorizationError({code:"ATR-01",message:"Authorization not included"})
    const accessToken = auth.split(" ")[1]
    
    let userContext;
    try{
        userContext = jwt.verify(accessToken,config.SECRET)
    }catch(error){
        console.log(error)
        next(new AuthorizationError({code:"ATR-02",message:"Invalid access token"}))
        return;
    }
    Auth.findOne({accessToken})
    .then(data => {
        if(!data) throw new AuthorizationError({code:"ATR-02",message:"Invalid access token, User not found"})
        if(data.logoutAt) throw new AuthorizationError({code:"ATR-03",message:"User has logged out,please log in"})
        req.accessToken=accessToken
        req.user=userContext
        next()
    }).catch(error => {
        console.log(error)
        next(error)
    })


}
const logoutUser=(accessToken)=>{
    //return all auth data
    return Auth.findOneAndUpdate({accessToken},{logoutAt:new Date()},{new:true})

}

module.exports = {
    comparePassword,
    generateAccessToken,
    authenticate,
    logoutUser
}