const { response } = require('express')
const { CityService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {ErrorResponse, SuccessResponse}= require("../utils/common")

async function  createCity(req, res){

    try{
        const city = await CityService.createCity({
           name: req.body.name
        })
        SuccessResponse.message= "successfully created the city";
        SuccessResponse.data= city;
        return res.status(StatusCodes.CREATED).json(
          SuccessResponse
        )
    }
    catch(error){
        ErrorResponse.error= error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
           ErrorResponse
        )
    } 
}


module.exports ={
    createCity
}