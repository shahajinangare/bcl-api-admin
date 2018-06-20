var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');  
var bodyParser = require('body-parser');

var cors = require('cors'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');
var adminRouter = require('./routes/admin');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());  
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({  
    extended: false  
})); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter); 
app.use('/admin', adminRouter); 



// catch 404 and forward to error handler
app.use(function(req, res, next) {  
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// development error handler  
// will print stacktrace  
if (app.get('env') === 'development') {  
    app.use(function(err, req, res, next) {  
        res.status(err.status || 500);  
        res.render('error', {  
            message: err.message,  
            error: err  
        });  
    });  
}  
// production error handler  
// no stacktraces leaked to user  
app.use(function(err, req, res, next) {  
    res.status(err.status || 500);  
    res.render('error', {  
        message: err.message,  
        error: {}  
    });  
});  

module.exports = app;
