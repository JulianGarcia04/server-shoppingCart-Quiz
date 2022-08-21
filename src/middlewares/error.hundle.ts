import { ErrorRequestHandler } from 'express'

export interface errorStrucure {
  message:string,
  stack:string
}

const errorHandler:ErrorRequestHandler = (err, req, res, next)=>{
    console.error(err);
    next(err);
}

const formatError:ErrorRequestHandler = (err, req, res, next)=>{
  let errorStructure:errorStrucure = {
    message: err.message,
    stack : err.stack
  }
    return res.status(500).json(errorStructure);
}

const boomErrorHandler:ErrorRequestHandler = (err, req, res, next)=>{
    if(err.isBoom){
        const { output } = err;
        return res.status(output.statusCode).json(output.payload);
    }else{
        next(err);
    }
}

export default {errorHandler, formatError, boomErrorHandler};


