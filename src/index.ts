import server from './httpServer'

const init = () => {
    const promises = [
        server.start()
    ]
    return Promise.all(promises).then(() => {
        return 'Application started successfully.';
    });
}

init();
