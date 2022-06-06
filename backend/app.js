var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const homeRouter = require('./routes/home');
const storeRouter = require('./routes/store');

const shopRouter = require('./routes/shop');




const testRouter = require('./routes/member/test');
const accountRouter = require('./routes/member/Login');
const profileRouter =require('./routes/member/profile');
const db=require('./modules/mysql_config')

const menuRouter = require('./routes/menu');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
//http://localhost:3001/categories
app.use('/categories',categoriesRouter);
//http://localhost:3001/products
app.use('/products',productsRouter);

app.use('/test',testRouter);
app.use('/store',storeRouter);
app.use('/account',accountRouter);
app.use(`/profile`,profileRouter);
app.use(`/home`,homeRouter);

app.use('/menu',menuRouter);



//http://localhost:3001/shop
app.use('/shop',shopRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
