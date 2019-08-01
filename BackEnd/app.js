const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port =  process.env.port || 3000;
require('dotenv').config();


//configuration
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, auth');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


//start the server
app.listen(port,function(){
    console.log("Sever started at port",+port);
})
