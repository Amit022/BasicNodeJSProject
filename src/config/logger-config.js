const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, printf } = format;

const customFormat=printf(({ level,message,timestamp, label })=> {
    return `${timestamp} : ${level}: ${message}`;
})

const logger= createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH-mm-ss'}),
        customFormat
      ),
      transports : [
        new transports.Console(),
        // new transports.File({ fileName: 'combined.log'})
    ]
})

module.exports=logger;