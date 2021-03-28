import {Router} from 'express';
import { createRoles ,updateRole} from '../service/roleService/roles';
import { RolesCreationError,InternalServerError } from '../utils/errors';



export default () =>{
    const rolesApi = Router()

    rolesApi.post('/',(req,res,next) =>{
        const role = req.body
        createRoles(role)
        .then(id => res.status(201).json({
            id,
            message:"Role Successfully Created"
        }))
        .catch(err => {
            console.log(err)
            next(new RolesCreationError("DB Error") )
        })

    })
    rolesApi.put('/:id',(req,res,next)=>{
        updateRole(req.body,req.role)
        .then(id=>res.status(200).json({
                 id,
                 message:"Role succesfully updated"
        }))
        .catch(error=>{
            console.log(error);
            next(new InternalServerError("roles updation failed"))
        })
            
       
    })

    return rolesApi;
}