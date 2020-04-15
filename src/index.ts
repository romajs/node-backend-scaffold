import app from './app';
import config from './config';
import HttpServer from './HttpServer'

const httpHost: string = config.get('http.host')
const httpPort: number = config.get('http.port');
const httpServer = new HttpServer(httpHost, httpPort)

const init = async () => {
    console.log('Application initializing...');
    await httpServer.start(app)
    console.log('Application started successfully.');
}

init();
