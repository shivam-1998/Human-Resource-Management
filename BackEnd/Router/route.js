

module.exports = function(app){
    const user = require('../controller/user.js');

 //register
 app.post('/personaldetails',user.register);

 //login
app .post('/login',user.login);
}