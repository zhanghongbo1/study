const express = require ( 'express')
const path = require ( 'path')
const app = express()
var bodyParser = require('body-parser')
const message = require('./router/index')
const img = require('./router/img')
const backto =require('./router/back')
const {user , userAdd}= require('./mongose/Schema/user')
const mail=require('./router/mail')
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
app.use('/',message) 
app.use('/',backto)
app.use('/',img)
app.use('/',mail)
const connect= require ( './mongose/index')

connect()
app.listen(3000,()=>{
    console.log("服务器运行在 http://localhost:3000")
})