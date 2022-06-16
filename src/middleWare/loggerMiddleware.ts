import logger from "../utils/logger";
const expressPinoLogger = require('express-pino-logger');


export const loggerMidleware = expressPinoLogger({
    logger: logger,
    autoLogging: true,
  });