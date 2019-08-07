const express = require('express')
const router = express();
const con = require('../connection/connection.js');
const verifytoken = require('../verifytoken');
const {check,validationResult} = require('express-validator')
//add leave
router.post('/leave', verifytoken,
    [
        check('leave_start_date').not().isEmpty().withMessage("can not be blank"),
        check('leave_end_date').not().isEmpty().withMessage("can not be blank"),
        check('reason').not().isEmpty().withMessage("can not be blank"),
    ],
    (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                const leave_start_date = req.body.leave_start_date
                const leave_end_date = req.body.leave_end_date
                const reason = req.body.reason
                const leave_type = req.body.leave_type
                const emp_id = req.body.emp_id

                let sql =
                    `INSERT INTO Leave_History ( leave_start_date,leave_end_date,reason,leave_type,L_id)
                 VALUES('${leave_start_date}','${leave_end_date}','${reason}','${leave_type}',(SELECT L_id FROM Leave_balance WHERE emp_id = ${emp_id}))`;

                con.query(sql, function (error, results) {
                    if (!error) {
                        return res.status(200).json({ msg: "add leave", result: results[0] });
                    } else {
                        return res.status(500).json({ msg: 'not add the leave successfully', error: error });
                    }
                });
            }

        } catch{
            return res.status(500).send({ msg: error })
        }
    })

module.exports = router 