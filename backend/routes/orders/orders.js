const router = require('express').Router();
const pool = require('../../config/database');

router.get('/', (req, res) => {   
    const orderlastusername = "navin@gmail.com";
    const orderGetItemQuery = `select * from category where imageId IN (select orderProductId from orders where username = '${orderlastusername}')`;

    pool.getConnection((err, connection) => {
        if (err) console.log(err);
        connection.query(orderGetItemQuery, (err, result) => {

            if (err) { console.log(err); }

            if ((result.length > 0)) {
                res.status(200).json({
                    data: result
                })
            } else {
                res.status(404).json({ "data": "notFound" });
            }
            connection.release();
        })
    })
})



router.post('/addToCart/:imageId', (req, res) => {   
    const orderImageId=req.params.imageId;

    const orderAddToCartlastusername = "navin@gmail.com";
    const orderItemQuery = `insert into orders values ('${lastusername}','${orderAddToCartlastusername}')`;

    pool.getConnection((err, connection) => {
        if (err) console.log(err);
        connection.query(orderItemQuery, (err, result) => {

            if (err) { console.log(err); }

            if ((result.length > 0)) {
                res.status(200).json({
                    data: result
                })
            } else {
                res.status(404).json({ "data": "notFound" });
            }
            connection.release();
        })
    })
})


module.exports = router;