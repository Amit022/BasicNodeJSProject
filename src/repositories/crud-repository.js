const { logger } = require("../config");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } =require('http-status-codes')

class crudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error("Something went wrong in the crud repo : create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      if(!response){
        throw new AppError('Cant able to delete resource as its not present',StatusCodes.NOT_FOUND)
      }
      return response;
    } catch (error) {
      logger.error("Something went wrong in the crud repo : destroy");
      throw error;
    }
  }

  async get(data){
        const response= await this.model.findByPk(data);
        if(!response){
          throw new AppError('Cant able to find resource',StatusCodes.NOT_FOUND)
        }
        return response;
  }

  async getAll(){
    try {
        const response= await this.model.findAll();
        return response;
    } catch (error) {
        logger.error("Something went wrong in the crud repo : getAll")
        throw error;       
    }
  }

  async update(id,data){
    try {
       const response= await this.model.update(data, {
        where :{
         id: id
        }
       }) 
       return response;
    } catch (error) {
        logger.error("Something went wrong in the crud repo : update")
        throw error;
    }
  }
}

module.exports= crudRepository;
