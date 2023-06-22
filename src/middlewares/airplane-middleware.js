const {StatusCodes} = require("http-status-codes");

function validateCreateRequest(req,res, next){
    if(!req.body.modelNumber){
       return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "something went wrong while creating airplane",
        data:{},
        error:{
            explanation: "absent model number"
        }
       });
    }

    next()
}

module.exports = validateCreateRequest;