'use strict';

const logger = require('../middleware/logger.js');

function fiveHundred(err,request,response,next){
    logger();
    const error = err.message ? err.message : err;

    const errorObj = {
        status: 500,
        message: error,
    }
    response.status(errorObj.status).json(errorObj);
}

module.exports = fiveHundred;