const mysql = require('mysql');


const pool=mysql.createPool({
   connectionLimit : 5,
    host:"btsr4asoxlvlffgoxein-mysql.services.clever-cloud.com",
    user:"u57ts3g3c6wqnyie",
    password:"ECrcVurIyexc0LDYPphi",
    database: "btsr4asoxlvlffgoxein"
  })

module.exports=pool;