const  express = require('express');
// const config = require('./config');
const router = require('./router'); 
const bodyParser = require('body-parser');
import config from "./config";
import initializeDB, { getDB } from './db';
import cors from'cors';

const app = express();

app.use(bodyParser.json())
 app.use(cors({exposedHeaders:['Authorization']}))

app.use('/v1',router())

initializeDB(() =>{
    app.listen(config.port,() =>{
        console.log(process.env.NODE_ENV)
        console.log("Server started on port "+ config.port)
    })
})
