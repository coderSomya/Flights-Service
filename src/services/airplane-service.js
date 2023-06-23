const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} =  require('../repositories');
const {AppError} = require("../utils/errors/app-error")

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
  try{
    const airplane = await airplaneRepository.create(data);
    return airplane;
  }
  catch(error){
    console.log("some error in service layer");
    if(error.name == 'SequelizeValidationError'){
      let explanation = [];
      error.errors.forEach(err => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError('Cannot create a new airplane', StatusCodes.BAD_REQUEST)
    }
    throw new AppError(explanation, StatusCodes.BAD_REQUEST);
  }
}

module.exports = {
    createAirplane
}
