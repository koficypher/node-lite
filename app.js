const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.PORT || 8000;

const router = require('./routes');
const pollRoutes = require('./routes/polls');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router);
app.use('/polls',pollRoutes);


module.exports = app;