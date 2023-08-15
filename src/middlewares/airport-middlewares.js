const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils");

function ValidateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating an airport";
    ErrorResponse.error = {
      explanation:
        "Name not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating an airport";
    ErrorResponse.error = {
      explanation:
        "Code not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating an airport";
    ErrorResponse.error = {
      explanation:
        "cityId not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  ValidateCreateRequest,
};