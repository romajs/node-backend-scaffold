import config from './config';

const pino = require('pino');

const logger = pino({
  level: config.get('logger.level'),
  prettyPrint: {
    colorize: config.get('logger.prettyPrint.colorize'),
    translateTime: config.get('logger.prettyPrint.translateTime'),
  }
});

export default logger;
