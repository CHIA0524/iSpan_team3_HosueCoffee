const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();
require("dotenv").config();

console.log(process.env.MYSQL_DB)

router.route('/')
    .get(async(req,res,next)=>{
        const sql=
        "select*from users;";
        const [data]=await db.query(sql)

    })
module.exports = router;
