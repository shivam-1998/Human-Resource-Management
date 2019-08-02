const express = require('express');
const router = express();
const con = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const verifytoken = require('../verifytoken')

//education details
router.post('/education', verifytoken, [
    check('institute_name').not().isEmpty().withMessage("can not be blank"),
    check('degree').not().isEmpty().withMessage("can not be blank"),
    check('start_date').not().isEmpty().withMessage("can not be blank"),
    check('end_date').not().isEmpty().withMessage("can not be blank"),
], (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const institute_name = req.body.institute_name
            const degree = req.body.degree
            const start_date = req.body.start_date
            const end_date = req.body.end_date
            const emp_id = req.body.emp_id
            //check data exists or not
            let check = `select emp_id from Education where emp_id=${emp_id}`
            con.query(check, (error, data) => {
                if (data.length != 0) {
                    res.status(402).json('Employee Data Already Exists')
                } else {
                    let sql = `INSERT INTO Education(institute_name,degree,start_date,end_date,emp_id)
                    VALUES('${institute_name}','${degree}','${start_date}','${end_date}',${emp_id})`

                    con.query(sql, function (error, results) {
                        if (!error) {
                            return res.status(200).send({ msg: "Register successfully Education details", edu: results });
                        } else {
                            res.status(500).json({ msg: 'not registerd the details successfully', error: error });
                        }
                    });
                }
            })

        }

    } catch (error) {res.status(500).send({ msg: error }) };
})

module.exports = router;