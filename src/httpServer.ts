import app from './app';
import config from './config';

let httpServer: any = null;

const start = () => new Promise((resolve, reject) => {
  try {
    const [port, host] = [config.get('http.port'), config.get('http.host')];
    httpServer = app.listen(port, host, (...parms: any) => {
      console.log('parms:', parms);
      console.log('Http server started on:', httpServer.address());
      resolve(httpServer);
    });
  } catch (err) {
    reject(err);
  }
});

const stop = () => httpServer.close();

export default {
  start,
  stop,
};
