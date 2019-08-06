const con = require('./connection/connection')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = "shivam123";

verifytoken = (req,res,next) => {
     
     let decoded = jwt.verify(req.headers['token'],SECRET_KEY);
     if(decoded){
        const email = decoded.email
        let check = `select * from Employee_master where email='${email}'`
        con.query(check,(error,result)=>{
            if(!error){
                  req.data= result[0]
                  next();
                  
            }else{
                res.status(403).json({msg:"there are some error with query",error:error})
            }
        })
     }else{
         res.status(500).json({msg:"Authentication failed!!!"})
     }
}

module.exports = verifytoken;