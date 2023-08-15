
const { statusCodes }= require('http-status-codes')


const info= (req,res) => {
    res.json({
        success: "true",
        message : "API is Live",
        error: {},
        data: {}
    })
}

module.exports= {
    info
}