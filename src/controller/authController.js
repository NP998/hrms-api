import {Router} from 'express';
import {comparePassword,generateAccessToken,authenticate,logoutUser} from '../service/authService/auth';

export default () =>{
    const authApi = Router()

    authApi.post('/login',(req,res) =>{
        console.log("User Context",req.user)
        comparePassword(req.body.password,req.user.password)
        .then(isEqual => {
            if(!isEqual) throw new AuthenticationError({code:"ATH-03",message:"Password is incorrect"})
            generateAccessToken(req.user)
            .then(accessToken => {
                res.setHeader('Authorization',`Bearer ${accessToken}`)
                res.status(200).json({
                    id:req.user._id
                })
            })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    })

    // authApi.get('/logout',(req,res)=>{
    //     console.log("Hanlde logout")
    // })

    authApi.get('/logout',authenticate,(req,res,next)=>{
        console.log("user context",req.user);
        logoutUser(req.accessToken)
        .then((data)=>{
        
            res.status(200).json({
                message:"User successfully loggedout"
            })
        })
        .catch((error)=>{console.log(error);
           next (new AuthorizationError({code:"ATR-05",message:"unsuccessful request"}))
        })
    })
    return authApi;

}