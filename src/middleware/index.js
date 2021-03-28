const {Router} = require('express');
const { default: authMiddleware } = require('./authMiddleware');
const { default: deptMiddleware } = require('./deptMiddleware');
const { default: rolesMiddleware } = require('./rolesMiddleware');
const userMiddleware = require('./userMiddleware');



module.exports = () => {

    const middleware =  Router()

    middleware.use('/auth',authMiddleware())
    middleware.use('/department',deptMiddleware())
    middleware.use('/roles',rolesMiddleware())
    middleware.use('/user',userMiddleware())
    return middleware;
}