console.debug(`Loading configuration, process.env.NODE_ENV=${process.env.NODE_ENV}`);

require('dotenv').config()

import convict from 'convict';

const config = convict({
  env: {
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  http: {
    host: {
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'HOST',
      arg: 'host',
    },
    port: {
      format: 'port',
      default: 8000,
      env: 'PORT',
      arg: 'port',
    },
    rootBasePath: {
      format: String,
      default: '/',
      env: 'ROOT_BASE_PATH',
      arg: 'root-base-path',
    },
  },
  logger: {
    level: {
      format: String,
      default: 'debug',
      env: 'LOGGER_LEVEL',
      arg: 'logger-level',
    },
    prettyPrint: {
      colorize: {
        format: Boolean,
        default: true,
        env: 'LOGGER_COLORIZE',
        arg: 'logger-colorize',
      },
      translateTime: {
        format: String,
        default: 'SYS:isoUtcDateTime',
        env: 'LOGGER_TRANSLATETIME',
        arg: 'logger-translatetime',
      },
    },
  },
});

config.validate({ allowed: 'strict' });

// console.debug(`Configuration loaded sucesfully, config=${config.toString()}`);

export default config;
