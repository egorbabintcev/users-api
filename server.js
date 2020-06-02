const dotenv = require('dotenv');
dotenv.config({ path: `./config/.${process.env.NODE_ENV}.env` });
global.memory = new Map();

const express = require('express');
const parser = require('body-parser');
const router = require('./routes/router');

const app = express();
const registerResMiddleware = (req, res, next) => {
  memory.set('response', res);
  next();
}

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(registerResMiddleware);
app.use(router);

app.listen(process.env.SERVERPORT);
