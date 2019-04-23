const express = require('express');

const expressRouter = require('./express-router')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('What am I in this world..?');
});

server.use('/api/posts', expressRouter);

module.exports = server;