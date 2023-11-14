const dbCon = require('../db/dbConnection');

module.exports = function addEmployee(userdata) {
    dbCon.query('INSERT INTO EMPLOYEE (name, password) VALUE (?,?,?)', [userdata.name, user.password], (error, results) => {
        if (error) {
            return res.json({ "success" : 0, "error": error });
        } else {
            return res.json( { "success" : 1 });
        }
    });
}
 