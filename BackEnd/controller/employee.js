const express = require('express')
const router = express();
const con = require('../connection/connection.js');
const verifytoken = require('../verifytoken')

//viewpersonal data of employee by Id
router.get('/viewpersonaldata/:Id', verifytoken, (req, res) => {
    const emp_id = req.data.emp_id
    
    let check = `select emp_id from Employee_master where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.status(500).send("user not exists")
        } else {
            let query = `SELECT * FROM Employee_master WHERE emp_id = ${emp_id}`
            con.query(query, (error, results) => {
                if (results.length > 0) {
                    return res.status(200).send({ msg: "get personal data successfully", results: results[0] })
                } else {
                    return res.status(500).send({ msg: "not geeting data" })
                }
            })
        }
    })

});

//vieweducation data of employee by Id
router.get('/vieweducationdata/:Id', verifytoken, (req, res) => {
    const emp_id = req.data.emp_id
    let check = `select emp_id from Education where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.status(500).send("user not exists")
        } else {
            let query = `select * from Education WHERE emp_id = ${emp_id}`
            con.query(query, (error, results) => {
                if (results.length > 0) {
                    return res.status(200).send({ msg: "get education data successfully", results: results[0] })
                } else {
                    return res.status(500).send({ msg: "not geeting data" })
                }
            });
        }

    });
})

//viewprofessional data of employee by Id
router.get('/viewprofessionaldata/:Id', verifytoken, (req, res) => {
    const emp_id = req.data.emp_id
    let check = `select emp_id from Professional_details where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.send("user not exists")
        } else {
            let query = `select * from Professional_details WHERE emp_id = ${emp_id}`
            con.query(query, (error, results) => {
                if (!error) {
                    return res.status(200).send({ msg: "get Professional_details data successfully", results: results[0] })
                } else {
                    return res.status(500).send({ msg: "not geting data", error })
                }
            });
        }
    });
});

//viewfamily data of employee by Id
router.get('/viewfamilydata/:Id', verifytoken, (req, res) => {
    const emp_id = req.data.emp_id
    let check = `select emp_id from Family where emp_id=${emp_id}`
    con.query(check, (error, data) => {
        if (data.length == 0) {
            res.send("user not exists")
        } else {
            let query = `select * from Family WHERE emp_id = ${emp_id}`
            con.query(query, (error, results) => {
                if (!error) {
                    return res.status(200).send({ msg: "get family data successfully", results: results[0] })
                } else {
                    return res.status(500).send({ msg: "not geting data", error })
                }
            })
        }
    });

});

module.exports = router;