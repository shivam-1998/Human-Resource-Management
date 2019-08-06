const express = require('express')
const router = express();
const con = require('../connection/connection.js');
const verifytoken = require('../verifytoken')
 //add leave
 router.post('/leave',verifytoken,
 [
    check('emp_name').not().isEmpty().withMessage("can not be blank"),
    check('emp_name').not().isEmpty().withMessage("can not be blank"),
    check('emp_name').not().isEmpty().withMessage("can not be blank"),
 ],
 (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: req.body });
        } else {
            const start_date = req.body.start_date
            const end_date = req.body.end_date
            const reason = req.body.reason
           
            let sql =
                `INSERT INTO Leave history(start_date,end_date,reason)
                 VALUES('${start_date}','${end_date}','${reason}')`;

            con.query(sql, function (error, results) {
                if (!error) {
                    return res.status(200).send({ msg: "add leave", result:results[0] });
                } else {
                    res.status(500).json({ msg: 'not add the leave successfully', error: error });
                }
            });
        }
 
     }catch{

     }
 })

module.exports = router 