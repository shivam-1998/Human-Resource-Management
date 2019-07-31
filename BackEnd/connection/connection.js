const mysql = require('mysql2/promise');

const connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Hrms',
        waitForConnections: true,
        connectionLimit: 50,
        queueLimit: 0
});
  
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

module.exports=connection;