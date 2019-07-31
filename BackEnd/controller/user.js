const con = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
require('dotenv').config();


//Personal Details
exports.register = (req, res) => {
    console.log("call");
    console.log(req.body);

    [
        check('emp_name').not().isEmpty().withMessage("can not be blank"),
        check('email').isEmail().withMessage('must be a valid email address').not().isEmpty().withMessage("can not be blank"),
        check('password').isLength({ min: 3 }).withMessage('must be at least 3 chars long').not().isEmpty().withMessage("can not be blank"),
        check('contact_no').isLength({ min: 10 }).not().isEmpty().withMessage("can not be blank"),
        check('address').not().isEmpty().withMessage("can not be blank"),
        check('dob').not().isEmpty().withMessage("can not be blank"),
        // check('pan_no').isOptional(),
        check('em-contact_no').isLength({ min: 10 }).not().isEmpty().withMessage("can not be blank"),
        check('em-contact_name').not().isEmpty().withMessage("can not be blank"),
        // check('marital_status').isOptional(),
        // check('skills').isOptional(),
        // check('hobbies').isOptional(),
        check('role').not().isEmpty().withMessage("can not be blank").isIn(['HR', 'Employee']),
    ],
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                const empname = req.body.emp_name
                const email = req.body.email
                const password = bcrypt.hashSync(req.body.password, 8)
                const contact_no = req.body.contact_no
                const address = req.body.address
                const dob = req.body.dob
                const panno = req.body.panno
                const emcontact_no = req.body.em_contact_no
                const emcontact_name = req.body.em_contact_name
                const marital_status = req.body.marital_status
                const skills = req.body.skills
                const hobbies = req.body.hobbies
                const role = req.body.role
            }
                let sql =
                    `INSERT INTO Employee_master(emp_name,email,password,contact_no,address,dob,pan_no,em-contact_no, em-contact_name,marital_status,skills,hobbies,role)
            VALUES('${empname},${email},${password},${contact_no},${address},${dob},${panno},${emcontact_no},${emcontact_name},${marital_status},${skills},${hobbies},${role}')`;

                con.query(sql, function (error, results) {
                    if (results.length > 0) {
                        return res.status(200).send("Register successfully personal details");
                    } else {
                        res.status(500).json("not registerd the details successfully");
                    }
                })
            }


        }

    //login
    exports.login = (req, res) => {
        [check('email').isEmail().withMessage('please enter a valid email address').not().isEmpty().withMessage('can not be blank'),
        check('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long').not().isEmpty().withMessage('can not be blank')],
            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                }
                const email = req.body.email
                const password = req.body.password
                data = { email, password }

                let loginquery = `SELECT * FROM Employee_master WHERE email = '${email}'`;
                con.query(loginquery, function (error, results) {
                    if (error) {
                        res.status(500).json("there are some error with query")
                    } else {
                        if (results.length > 0) {
                            if (bcrypt.compareSync(password, results[0].password)) {
                                let token = jwt.sign(results[0], process.env.SECRET_KEY, {
                                    expiresIn: 5000
                                });
                                res.status(200).json({ status: true, token: token })
                            } else {
                                res.status(500).json("email and password does not match");
                            }
                        }
                        else {
                            res.status(500).json("Email does not exists")
                        }
                    }
                });

            }
    }