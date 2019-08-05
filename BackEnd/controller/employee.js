const express = require('express');
const router = express();
const con = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const verifytoken = require('../verifytoken')

//viewpersonal data of employee by Id
router.get('/viewpersonaldata',verfitoken,(req,res)=>{
     let query = `select * from Employe_master WHERE emp_id = ${emp_id}`
     con.query(query,(error,results)=>{
         if(!error){
             return res.status(200).send({msg:"get personal data successfully",results})
         }else{
             return res.status(500).send({msg:"not geting data",error})
         }
     })
});

//vieweducation data of employee by Id
router.get('/vieweducationdata',verfitoken,(req,res)=>{
    let query = `select * from Education WHERE emp_id = ${emp_id}`
    con.query(query,(error,results)=>{
        if(!error){
            return res.status(200).send({msg:"get education data successfully",results})
        }else{
            return res.status(500).send({msg:"not geting data",error})
        }
    })
});

//viewprofessional data of employee by Id
router.get('/viewprofessionaldata',verfitoken,(req,res)=>{
    let query = `select * from Professional WHERE emp_id = ${emp_id}`
    con.query(query,(error,results)=>{
        if(!error){
            return res.status(200).send({msg:"get professional data successfully",results})
        }else{
            return res.status(500).send({msg:"not geting data",error})
        }
    })
});

//viewfamily data of employee by Id
router.get('/viewfamilydata',verfitoken,(req,res)=>{
    let query = `select * from Family WHERE emp_id = ${emp_id}`
    con.query(query,(error,results)=>{
        if(!error){
            return res.status(200).send({msg:"get family```` data successfully",results})
        }else{
            return res.status(500).send({msg:"not geting data",error})
        }
    })
});