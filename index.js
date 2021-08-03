//@ts-check

const { app } = require('./app');
const { appConfig } = require('./config/app.config');

app.listen(appConfig.port, appConfig.host);
