import app from './app';
import config from './config';
import HttpServer from './HttpServer'
import logger from './logger';

const httpHost: string = config.get('http.host')
const httpPort: number = config.get('http.port');
const httpServer = new HttpServer(httpHost, httpPort)

const init = async () => {
    logger.info('Application initializing...');
    await httpServer.start(app)
    logger.info('Application started successfully.');
}

init();
