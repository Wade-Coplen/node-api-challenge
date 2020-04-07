const express = require('express');
const server = express();
const morgan = require('morgan');
const helmet = require('helmet');

const actionsRouter = require('./data/helpers/actionsRouter');
const projectRouter = require('./data/helpers/projectRouter');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionsRouter)
server.get('/', (req, res) => {
    res.send('server.js');
})

module.exports = server;