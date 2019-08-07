const express = require('express')
const router = express();
const con = require('../connection/connection.js');
const verifytoken = require('../verifytoken')
// pesronal
router.patch('/updatepersonal/:Id', verifytoken, (req, res) => {
    const emp_id = req.params.Id
    let check = `select emp_id from Employee_master where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.status(500).send("user not exists")
        } else {
            const emp_name = req.body.emp_name
            const email = req.body.email
            const contact_no = req.body.contact_no
            const address = req.body.address
            const dob = req.body.dob
            const pan_no = req.body.pan_no
            const em_contact_no = req.body.em_contact_no
            const em_contact_name = req.body.em_contact_name
            const marital_status = req.body.marital_status
            const skills = req.body.skills
            const hobbies = req.body.hobbies

            let query = `Update Employee_master set emp_name='${emp_name}',email='${email}',contact_no=${contact_no},address='${address}',dob='${dob}'
            ,pan_no='${pan_no}',em_contact_no=${em_contact_no}, em_contact_name='${em_contact_name}',marital_status='${marital_status}',skills='${skills}',hobbies='${hobbies}'
             WHERE emp_id = ${emp_id}`

            con.query(query, (error, results) => {
                if (error) {
                    return res.status(500).json({ msg: "not update data", error })
                } else {
                    return res.status(200).json({ msg: "update education data successfully", results: results[0] })
                }
            });
        }

    });
})

//education
router.patch('/updateeducation/:Id', verifytoken, (req, res) => {
    const emp_id = req.params.Id
    let check = `select emp_id from Education where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.status(500).send("user not exists")
        } else {
            const institute_name = req.body.institute_name
            const degree = req.body.degree
            const start_date = req.body.start_date
            const end_date = req.body.end_date

            let query = `Update Education set institute_name='${institute_name}',degree='${degree}',start_date='${start_date}',end_date='${end_date}'
             WHERE emp_id = ${emp_id}`

            con.query(query, (error, results) => {
                if (error) {
                    return res.status(500).send({ msg: "not update data", error })
                } else {
                    return res.status(200).send({ msg: "update education data successfully", results: results[0] })
                }
            });
        }

    });
})
//professional
router.patch('/updateprofessional/:Id', verifytoken, (req, res) => {
    const emp_id = req.params.Id
    let check = `select emp_id from  Professional_details where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.status(500).send("user not exists")
        } else {
            const c_name = req.body.c_name
            const designation = req.body.designation
            const join_date = req.body.join_date
            const dept_name = req.body.dept_name
            const revealing_date = req.body.revealing_date
            const status = req.body.status
            let query = `Update Professional_details set c_name='${c_name}',designation='${designation}',join_date='${join_date}'
            ,dept_name='${dept_name}',status='${status}'
             WHERE emp_id = ${emp_id}`

            con.query(query, (error, results) => {
                if (error) {
                    return res.status(500).send({ msg: "not update data", error })
                } else {
                    return res.status(200).send({ msg: "update Professional data successfully", results: results[0] })
                }
            });
        }

    });
})
//family
router.patch('/updatefamily/:Id', verifytoken, (req, res) => {
    const emp_id = req.params.Id
    let check = `select emp_id from Family where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.status(500).send("user not exists")
        } else {
            const name = req.body.name
            const relation = req.body.relation
            const occupation = req.body.occupation
            const phone_no = req.body.phone_no

            let query = `Update Family set name='${name}',relation='${relation}',occupation='${occupation}'
            ,phone_no=${phone_no}
             WHERE emp_id = ${emp_id}`

            con.query(query, (error, results) => {
                if (error) {
                    return res.status(500).send({ msg: "not update data", error })
                } else {
                    return res.status(200).send({ msg: "update Family data successfully", results: results[0] })
                }
            });
        }

    });
})
//get current employees
router.get('/currentemp', verifytoken, (req, res )=> {
    let query = `SELECT e.emp_id,e.emp_name,e.email,e.contact_no FROM Employee_master AS e JOIN Professional_details ON e.emp_id = Professional_details.emp_id WHERE status='current'`
    con.query(query,(error,results)=>{
        if(error){
            return res.status(500).send({ msg: "not getting current employee", error })
        }
        return res.status(200).send({ msg: "getting current employees successfully", results })
    })
})
//get left employees
router.get('/leftemp', verifytoken, (req, res )=> {
    let query = `SELECT e.emp_id,e.emp_name,e.email,e.contact_no FROM Employee_master AS e JOIN Professional_details ON e.emp_id = Professional_details.emp_id WHERE status='left'`
    con.query(query,(error,results)=>{
        if(error){
            return res.status(500).send({ msg: "not getting current employee", error })
        }
        return res.status(200).send({ msg: "getting left employees successfully", results })
    })
})
module.exports = router;