// import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import config from './config';
import { DatabaseConnectionError } from './utils/errors';

const initiliseDB = (callback) =>{
    mongoose.connect(`${config.db_url}/${config.db_name}`,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(res =>{
        console.log("Connection to the db established " + config.db_name)
        callback()
    })
    .catch(err =>{
            console.log("Connection to db failed"+config.db_name)
            next(new DatabaseConnectionError("Server Error"))
    })
}

// let _db = null;

// const initiliseDB = (callback) =>{
//     MongoClient.connect(config.db_url,(err,client)=>{
//         if(err) {
//             console.log("Connection to db failed"+config.db_name)
//             console.log(err)
//             throw new DatabaseConnectionError("Server Error");
//         }
//         _db = client.db(config.db_name);
//         console.log("Connection to the db established " + config.db_name)
//         callback();
//     })
// }

// export const getDB = () => _db;





export default initiliseDB;
 