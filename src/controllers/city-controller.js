const { CityService } = require("../services");
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse }=require('../utils')

/**
 * 
 * url : /cities POST
 * req-body : { name: 'London'}
 */

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data= city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message="Something went wrong while creating an City";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports={
    createCity
}

