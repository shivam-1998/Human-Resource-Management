const express = require('express')
const router = express();
const con = require('../connection/connection.js');
const verifytoken = require('../verifytoken');
const { check, validationResult } = require('express-validator')
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
                 VALUES('${leave_start_date}','${leave_end_date}','${reason}','${leave_type}',(SELECT L_id FROM Leave_balance WHERE Leave_balance.emp_id = ${emp_id}))`;

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

//viewemployees on leave today
router.get('/viewleaves', verifytoken, (req, res) => {
    let sql = `SELECT Leave_balance.emp_id,Employee_master.emp_name FROM Leave_balance 
    JOIN Leave_History on Leave_balance.L_id = Leave_History.L_id 
    JOIN Employee_master on Employee_master.emp_id = Leave_balance.emp_id 
    WHERE CURRENT_DATE() BETWEEN Leave_History.leave_start_date AND Leave_History.leave_end_date
    `
      con.query(sql,(error,result)=>{
          if(result.length >0){
              return res.status(200).json({result:result})
          }else{
              res.status(404).send("no data")
          }

      })
});

router.get("/showleaves",verifytoken,(req,res)=>{
    try{
        let sql =`SELECT Employee_master.emp_name FROM Leave_balance JOIN Leave_History ON
         Leave_balance.L_id = Leave_History.L_id 
        JOIN Employee_master ON Employee_master.emp_id = Leave_balance.emp_id 
        WHERE Leave_History.leave_start_date BETWEEN CURRENT_DATE() AND ADDDATE(CURRENT_DATE(),INTERVAL 5 DAY)`
        con.query(sql,(error,result)=>{
            if(result.length > 0){
                return res.status(200).json({result:result})
            }
        })
    }catch(error){
        return res.status(500).json({msg:error})
    }
})



module.exports = router 