const express= require("express")
const { CityController }=require("../../controllers")
const { cityMiddlewares }= require("../../middlewares")

const router=express.Router();

router.post('/', cityMiddlewares.ValidateCreateRequest  ,CityController.createCity)

module.exports=router;