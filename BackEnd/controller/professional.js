const express = require('express');
const router = express();
const con = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const verifytoken = require('../verifytoken')
//family details
router.post('/professional', verifytoken, [
    check('c_name').not().isEmpty().withMessage("can not be blank"),
    check('designation').not().isEmpty().withMessage("can not be blank"),
    check('join_date').not().isEmpty().withMessage("can not be blank"),
    // check('revealing_date').not().isEmpty().withMessage("can not be blank"),
    check('dept_name').not().isEmpty().withMessage("can not be blank"),
    check('status').not().isEmpty().withMessage("can not be blank"),
],
    (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                const c_name = req.body.c_name
                const designation = req.body.designation
                const join_date = req.body.join_date
                const dept_name = req.body.dept_name
                const status = req.body.status
                const emp_id = req.body.emp_id
                //check data exists or not
                let check = `select emp_id from Professional_details where emp_id=${emp_id}`
                con.query(check, (error, data) => {
                    if (data.length != 0) {
                        res.send('Employee Data Already Exists')
                    }
                    else {
                        //insert data
                        let sql = `INSERT INTO Professional_details(c_name,designation,join_date,status,dept_name,emp_id)
                            VALUES('${c_name}','${designation}','${join_date}','${status}','${dept_name}','${emp_id}')`

                        con.query(sql, function (error, results) {
                            if (!error) {
                                return res.status(200).send({ msg: "Register successfully Family details", data: results });
                            } else {
                                res.status(500).json({ msg: 'not registerd the details successfully', error: error });
                            }
                        });

                    }
                })

            }

        } catch (error) { res.status(500).send({ msg: error }) };
    });

module.exports = router;