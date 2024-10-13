import * as winston from 'winston';
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),     // Add a timestamp to log entries
        winston.format.json()           // Ensure the log format is JSON
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
        //new winston.transports.File({ filename: 'error.log', level:'error' }),
        //new winston.transports.File({ filename: 'combined.log' }),
    ],
})

export default logger;