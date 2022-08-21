"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err);
    next(err);
};
const formatError = (err, req, res, next) => {
    let errorStructure = {
        message: err.message,
        stack: err.stack
    };
    return res.status(500).json(errorStructure);
};
const boomErrorHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        return res.status(output.statusCode).json(output.payload);
    }
    else {
        next(err);
    }
};
exports.default = { errorHandler, formatError, boomErrorHandler };
