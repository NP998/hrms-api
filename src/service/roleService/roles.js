import Roles from "../../model/roles"

export const createRoles  = (data) => {
    const role = new Roles(data)
    return role.save().then( data => data._id)
}

export const updateRole=(newRole,oldRole)=>{
    //console.log("oldRole",oldRole);
    //console.log("newRole",newRole);
    //data update here
    const updateData={...oldRole,...newRole}
  // console.log("update data is",updateData);
    return Roles.findByIdAndUpdate(oldRole._id,updateData,{upsert:true,new:true})
           .then(data=>{
                // console.log(data)
                 return data._id
                })
            .catch(err=>{
                console.log(err);
            })    
}