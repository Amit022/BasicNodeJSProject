const express= require('express');
const apiRoutes= require('./routes')

const { serverConfig, logger}= require('./config');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, async ()=> {
    console.log(`Successfully started the server on: ${serverConfig.PORT}`);
    logger.info("Successfully started the server", {});

    const { City, Airport }=require("./models")

    // const city= await City.findByPk(4);
    // await city.createAirport({name:"Kempegowda Airport", code: "BLR"})

    // await City.destroy({
    //     where: {
    //         id: 4
    //     }
    // });
})