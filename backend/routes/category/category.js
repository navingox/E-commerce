const router = require('express').Router();
require('dotenv').config();
const pool = require('../../config/database');

router.get('/category', (req, res) => {
    const loginquery = `select * from login where email='${email}' and password='${password}'`;
    pool.getConnection((err, connection) => {
        if (err) console.log(err);
            connection.query(loginquery, (err, result) => {
            if (err) {
                console.log(err);
            }
            if ((result.length > 0)) {
                jwt.sign({data: result[0].name}, "navinsecretkey", { expiresIn: '1h' }, (err, token) => {
                    if (err) console.log(err);
                    res.json({ "status": "Authorized", "token": token });
                })
            } else {
                res.json({ "status": "unauthorized" });
            }
d        })
    })
})


module.exports = router;