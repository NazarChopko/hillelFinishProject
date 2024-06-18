require('dotenv').config();
const express = require('express');
const config = require('config');
const cors = require('cors');
const morgan = require('morgan');
const rootRouter = require('./routes');
const cookieParser = require('cookie-parser');
const transformReq = require('./middleware/transformReq/transformReq');

const server = express();
const router = express.Router();
const morganLogFormat = ':date :method :url :status';
const morganConsoleLogger = morgan(morganLogFormat);

server.use(cors('*'));
server.set('view engine', 'pug');
server.use(express.json());
server.use(cookieParser());
server.use(express.static(__dirname + '/static'));
server.use(morganConsoleLogger);
server.use('/api', rootRouter(router));
server.use('/api', transformReq, (req, res) => {
  res.render('404', { isUserLogged: req.token });
});

server.listen(config.port, () => {
  console.log(`server has started at ${config.port} PORT`);
});
