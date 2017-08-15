var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var compression = require('compression')
var mongoose = require('mongoose')
require('dotenv').config()

var index = require('./routes/index')
var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(compression())

app.use('/', index);
app.use('/api/articles', articles)
app.use('/api/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

mongoose.Promise = global.Promise

var DB_URL = `mongodb://localhost/hacktivpress-fajar`
mongoose.connect(DB_URL, err => {
  err ? console.log(err) : console.log(`database connected`)
})
console.log(`listening on port 3000....`)

module.exports = app;
