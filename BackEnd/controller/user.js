const express = require('express');
const router = express();
const con = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const verifytoken = require('../verifytoken')
require('dotenv').config();
const SECRET_KEY = process.env.secretkey;



//Personal Details
router.post('/personaldetails',verifytoken,
    [
        check('emp_name').not().isEmpty().withMessage("can not be blank"),
        check('email').isEmail().withMessage('must be a valid email address').not().isEmpty().withMessage("can not be blank"),
        check('password').isLength({ min: 3 }).withMessage('must be at least 3 chars long').not().isEmpty().withMessage("can not be blank"),
        check('contact_no').isLength({ min: 10 }).not().isEmpty().withMessage("can not be blank"),
        check('address').not().isEmpty().withMessage("can not be blank"),
        check('dob').not().isEmpty().withMessage("can not be blank"),
        check('pan_no').isLength({ min: 10 }).withMessage("It must be 10 digit number"),
        check('em_contact_no').isLength({ min: 10 }).not().isEmpty().withMessage("can not be blank"),
        check('em_contact_name').not().isEmpty().withMessage("can not be blank"),
        check('marital_status').isIn(['married', 'unmarried']),
        // check('skills'),
        // check('hobbies').isOptional(),
        check('role').not().isEmpty().withMessage("can not be blank").isIn(['HR', 'EMPLOYEE']),
    ],
    (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: req.body });
            } else {
                const empname = req.body.emp_name
                const email = req.body.email
                const password = bcrypt.hashSync(req.body.password, 8)
                const contact_no = req.body.contact_no
                const address = req.body.address
                const dob = req.body.dob
                const pan_no = req.body.pan_no
                const em_contact_no = req.body.em_contact_no
                const em_contact_name = req.body.em_contact_name
                const marital_status = req.body.marital_status
                const skills = req.body.skills
                const hobbies = req.body.hobbies
                const role = req.body.role

                let sql =
                    `INSERT INTO Employee_master(emp_name,email,password,contact_no,address,dob,pan_no,em_contact_no, em_contact_name,marital_status,skills,hobbies,role)
        VALUES('${empname}','${email}','${password}',${contact_no},'${address}','${dob}','${pan_no}',${em_contact_no},'${em_contact_name}','${marital_status}','${skills}','${hobbies}','${role}')`;

                con.query(sql, function (error, results) {
                    if (!error) {
                        return res.status(200).send({msg:"Register successfully personal details",emp:results});
                    } else {
                        res.status(500).json({msg:'not registerd the details successfully',error:error});
                    }
                });
            }
        } catch (error) { res.status(500).send({ msg: error }) };

    })


//login
router.post('/login',
    // [
    //     check('email').isEmail().withMessage('please enter a valid email address').not().isEmpty().withMessage('can not be blank'),
    //     check('password').isLength({ min: 5 }).withMessage("Length should be min 5 char").not().isEmpty().withMessage('can not be blank')
    // ], 
    (req, res) => {
        console.log("in");
        console.log(req.body);
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            const email = req.body.email
            const password = req.body.password
            data={email,password}
            let loginquery = `SELECT * FROM Employee_master WHERE email = '${email}'`;
            con.query(loginquery, function (error, results) {
                if (error) {
                    res.status(500).json("there are some error with query")
                } else {
                    if (results.length > 0) {
                        if (bcrypt.compareSync(password, results[0].password)) {
                            let token = jwt.sign(data, SECRET_KEY, {
                                expiresIn: 5000
                            });
                            res.status(200).json({ token: token, emp_id: results[0]['emp_id'],role: results[0]['role']})
                        } else {
                            res.status(500).json(" password does not match");
                        }
                    }
                    else {
                        res.status(500).json("Email does not exists")
                    }
                }
            });

        } catch (error) { res.status(500).send({ msg: error }) };

    });

//get personal details
router.get('/viewpersonal',verifytoken,
(req,res)=>{
    const email = req.data.email
    let query = `SELECT * FROM Employee_master WHERE email = '${email}'`;
    con.query(query,function(err,results){
        if (err){
            res.status(500).json("there are some error with query");
        }
        else{
            res.status(200).json({msg:"get the data successfully",result:results});
        }
    })
})

module.exports = router;