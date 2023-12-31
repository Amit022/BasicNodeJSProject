const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils");

function ValidateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "flightNumber not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "airplaneId not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "arrivalTime not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "departureTime not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "arrivalAirportId not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "departureAirportId not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "price not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating a flight";
    ErrorResponse.error = {
      explanation:
        "totalSeats not found in the incoming request in the correct format",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  ValidateCreateRequest,
};