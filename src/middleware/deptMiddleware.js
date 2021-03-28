import {Router} from 'express';
import Department from '../model/department';
import { DeptCreationError, InternalServerError } from '../utils/errors';
const { body, validationResult } = require("express-validator");


export default () =>{
    const deptMiddleware = Router()

    deptMiddleware.post('/',body('title').notEmpty().isLength({min:3,max:25}),(req,res,next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log("Roles data is invalid");
          throw new DeptCreationError(errors.errors);
        }
        next();
    })

    deptMiddleware.put('/:id',(req,res,next) =>{
        const id = req.params.id
        Department.findById(id)
        .then(data =>{
            console.log(data)
            if(!data) {
                console.log('heer')
                throw new DeptCreationError("Department doesnt exist")
            }
            req.department = data
            next()
        })
        .catch(error =>{
            console.log(error)
            // next(new InternalServerError("Server crashed"))
            next(error.message)
        })
    })

    return deptMiddleware;
}