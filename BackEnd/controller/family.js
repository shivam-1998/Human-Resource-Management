const express = require('express');
const router = express();
const con = require('../connection/connection.js');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const SECRET_KEY = process.env.secretkey;

//family details
router.post('/family', [
    check('name').not().isEmpty().withMessage("can not be blank"),
    check('relation').not().isEmpty().withMessage("can not be blank"),
    check('occupation').not().isEmpty().withMessage("can not be blank"),
    check('phone_no').isLength({ min: 10 }).withMessage("must be a 10 digit").not().isEmpty().withMessage("can not be blank"),
],
    (req, res) => {
        try {
            let decoded = jwt.verify(req.headers['token'], SECRET_KEY);
            if (decoded) {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                } else {
                    const name = req.body.name
                    const relation = req.body.relation
                    const occupation = req.body.occupation
                    const phone_no = req.body.phone_no
                    const emp_id = req.body.emp_id
                    //check data exists or not
                    let check = `select emp_id from Family where emp_id=${emp_id}`
                    con.query(check, (error, data) => {
                        if (data.length != 0) {
                            console.log(data);
                            res.send('Employee Data Already Exists')
                        } else {
                            //insert data
                            let sql = `INSERT INTO Family(name,relation,occupation,phone_no,emp_id)
                        VALUES('${name}','${relation}','${occupation}',${phone_no},${emp_id})`

                            con.query(sql, function (error, results) {
                                if (!error) {
                                    return res.status(200).send({ msg: "Register successfully Family details", family: results });
                                } else {
                                    res.status(500).json({ msg: 'not registerd the details successfully', error: error });
                                }
                            });
                        }
                    })

                }


            }

        } catch (error) { res.status(500).send({ msg: error }) };
    });
module.exports = router;