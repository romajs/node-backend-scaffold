import logger from './logger';

export default class HttpServer {
  #httpServer: any;
  host: string;
  port: number;

  constructor(host: string, port: number) {
    this.host = host
    this.port = port
  }

  start(app: any) {
    return new Promise((resolve, reject) => {
      try {
        this.#httpServer = app.listen(this.port, this.host, () => {
          logger.info(`HttpServer started at: ${JSON.stringify(this.#httpServer.address())}`);
          resolve(this.#httpServer);
        })
      } catch (err) {
        reject(err);
      }
    })
  }

  stop() {
    this.#httpServer.close();
  }
}
