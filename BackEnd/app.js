const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const port =  process.env.port || 3300;
require('dotenv').config();

const user = require('./controller/user');
const education = require('./controller/education')
const family = require('./controller/family')
const professional = require('./controller/professional')
const employee = require('./controller/employee')
const update = require('./controller/update')

//configuration
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type','Accept','token');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use(bodyparser.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

app.use(user);
app.use(family);
app.use(professional);
app.use(education);
app.use(employee);
app.use(update);






//start the server
app.listen(port,function(){
    console.log("Sever started at port",+port);
})
