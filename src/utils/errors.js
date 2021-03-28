class UserValidationError extends Error{
    constructor(errors){
        super(JSON.stringify({
            statusCode: 400,
            code:"USR-01",
            message:errors
        }));
    }
}

class UserCreationError extends Error{
    constructor(errors){
        super(JSON.stringify({
            statusCode: 400,
            code:"USR-02",
            message:errors
        }))
    }
}

class AuthenticationError extends Error{
    constructor(errors){
        super(JSON.stringify({
            statusCode: 401,
            code:errors.code,
            message:errors.message
        }))
    }
}

class AuthorizationError extends Error{
    constructor(errors){
        super(JSON.stringify({
            statusCode: 403,
            code:errors.code,
            message:errors.message
        }))
    }
}

class InternalServerError extends Error{
    constructor(error){
        super(JSON.stringify({
            statusCode:500,
            code:error.code,
            message:error.message
        }))
    }
}

class DatabaseConnectionError extends Error{
    constructor(error){
        super(JSON.stringify({
            statusCode:500,
            code:"DB-01",
            message:error,
        }))
    }
}


class RolesCreationError extends Error {
    constructor(errors){
        super(JSON.stringify({
            statusCode: 400,
            code:"RLE-01",
            message:errors
        }))
    }
}

class DeptCreationError extends Error{
    constructor(errors){
        super(JSON.stringify({
            statusCode: 400,
            code:"DPT-01",
            message:errors
        }))
    }
}


module.exports ={
    UserValidationError,
    UserCreationError,
    InternalServerError,
    DatabaseConnectionError,
    AuthenticationError,
    AuthorizationError,
    RolesCreationError,
    DeptCreationError
}