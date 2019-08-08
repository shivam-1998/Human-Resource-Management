const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const cron = require('node-cron')
const con = require('../BackEnd/connection/connection');
const port =  process.env.port || 3300;
require('dotenv').config();

const user = require('./controller/user');
const education = require('./controller/education')
const family = require('./controller/family')
const professional = require('./controller/professional')
const employee = require('./controller/employee')
const update = require('./controller/update')
const leave = require('./controller/leave')

//configuration
app.use(bodyparser.json())
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))

app.use(user);
app.use(family);
app.use(professional);
app.use(education);
app.use(employee);
app.use(update);
app.use(leave);

//cron
require('./controller/addleave');




//start the server
app.listen(port,function(){
    console.log("Sever started at port",+port);



})
