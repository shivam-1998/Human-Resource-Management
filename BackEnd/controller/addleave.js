const cron = require('node-cron')
const con = require('../connection/connection');


const task = cron.schedule('0 0 1 1-12 *', () => {
    let sql = `UPDATE Leave_balance SET leave_balance = leave_balance + 1.5`
    con.query(sql, (err, results) => {
        if (!err) {
            console.log('update successfully leave balance by every month');
        }
    })
}
    , {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });
task.start();


module.exports = task;