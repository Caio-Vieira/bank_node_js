const express = require("express");

const app = express();
app.use(express.json());

const userRouter = require('./router/userRouter');
app.use('/', userRouter);


module.exports = app;
