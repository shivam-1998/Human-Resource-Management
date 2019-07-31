const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port =  process.env.port || 3000;
require('dotenv').config();

require('./Router/route.js')(app)
//configuration
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//start the server
app.listen(port,function(){
    console.log("Sever started at port",+port);
})
