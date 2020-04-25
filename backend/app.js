var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const config = require('./configs/config');
const errorHandler = require('./middlewares/errorHandler');

var app = express();

app.use(cors());

mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(errorHandler);

module.exports = app;