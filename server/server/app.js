var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose');
var app = express();





import database from './db/ConnectDatabase'
import {addEvent} from './db/AddToDatabase'
import {getTable} from './db/getFromDatabase'
import {addNewUser} from './authentication/firebaseUsers'

addNewUser('ankudinovayekater@gmail.com', '87023451331qQ')

let date = {day:"26", month:"10", year:"1995", hours:"17", minutes:"30"}

//addEvent(mongoose, database.Event,1,"TAKE",  date , "DESCRIPT")



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/test', function (req, res) {
    res.send('TEST')
})

app.post('/', function (req, res) {

        database.Event.find( (err, a) =>{
            console.log(a)
            res.send(a)

        })
})

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
  res.render('error');
});



module.exports = app;



