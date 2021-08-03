// @ts-check
const express = require('express');
const cookieParser = require('cookie-parser');
const { trackRouter } = require('./routes/track');
const { statsRouter } = require('./routes/stats');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/track', trackRouter);
app.use('/stats', statsRouter);

module.exports.app = app;
