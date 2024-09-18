const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);

        this.paths = {
            auth: '/api/auth',
            students: '/api/students',
            grades: '/api/grades',
            restrictions: '/api/restrictions',
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(compression());

        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.students, require('../routes/students'));
        this.app.use(this.paths.grades, require('../routes/grades'));
        this.app.use(this.paths.restrictions, require('../routes/restrictions'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });

        process.on('SIGTERM', () => {
            console.log('SIGTERM signal received: closing HTTP server');
            this.server.close(() => {
                console.log('HTTP server closed');
            });
        });
    }

}

module.exports = Server;