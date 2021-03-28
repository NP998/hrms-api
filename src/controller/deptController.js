import {Router} from 'express';
import { createDepartment } from '../service/deptService/dept';
import { DeptCreationError } from '../utils/errors';



export default () => {
    const deptApi = Router()

    deptApi.post('/',(req,res,next)=>{
        const dept = req.body
        createDepartment(dept)
        .then(id => res.status(201).json({
            id,
            message:"Department Sucessfully Created"
        }))
        .catch(error=>{
            console.log(error)
            next(new DeptCreationError("Dept creation unsuccessful"))
        })
    })

    deptApi.put('/:id',(req,res,next) => {
        const deptId = req.params.id
        console.log("Department ",deptId)
    })

    return deptApi;
}