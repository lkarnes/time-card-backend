const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('./api/registration-api');
const loginRouter = require('./api/login-api');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req,res) => {
res.status(200).json({message: "API all clear!"})
})

server.use('/register/',registerRouter);
server.use('/login/', loginRouter);

module.exports = server;