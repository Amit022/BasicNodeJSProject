const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils");

function ValidateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating an airplane";
    ErrorResponse.error = {
      explanation:
        "Model Number not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  ValidateCreateRequest,
};
