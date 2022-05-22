const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();

console.log(process.env.MYSQL_DB)

router.route('/')
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * FROM `members`"; 
        const [datas]=await db.query(sql);
        res.json(datas);

    })
// router.route('/')
//     .get(async(req,res,next)=>{
//         const sql=
//         "SELECT * FROM `members` where member_accont='member_accont' AND member_password='member_password'"; 
//         const [datas]=await db.query(sql);
//         res.json(datas);

//     })
module.exports = router;