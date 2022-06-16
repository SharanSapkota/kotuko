import { Levels } from './logs/logLevels';

const pino = require('pino');

const logger =  pino({
  customLevels: Levels, 
  useOnlyCustomLevels: true,
  level: 'http',
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    translateTime: 'yyyy-dd-mm, h:MM:ss TT',
  },

  },
  pino.destination(`./src/utils/logs/logRecords.log`)
)

export default logger;