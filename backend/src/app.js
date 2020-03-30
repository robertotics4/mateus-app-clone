const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');

class AppController {
    constructor() {
        this.express = express();

        require('./database');

        this.initMiddlewares();
        this.initRoutes();
    }

    initMiddlewares() {
        this.express.use(express.json());
    }

    initRoutes() {
        this.express.use('/api', routes);
        this.express.use(errors());
    }
}

module.exports = new AppController().express;