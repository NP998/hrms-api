import Department from "../../model/department"

export const createDepartment = (data) =>{
    const dept = new Department(data)
    return dept.save().then(data => data._id)
}