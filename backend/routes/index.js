const router = require('express').Router();
const con = require('../db/dbConnection');
const dbCon = require('../db/dbConnection');

router.get('/', function(req, res, ){
    res.send("Hello World");
});

router.get('/testDBConnection', function(req, res) {
    dbCon.query("SELECT * FROM SALES_M", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        return;
    })
    con.end();
});

module.exports = router;