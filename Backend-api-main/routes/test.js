const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();
require("dotenv").config();



router.route('/')
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * FROM `user_ask`"; 
        const [datas]=await db.query(sql);
        res.json(datas);

    })
router.route('/id')
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * FROM `user_ask` where id=?"; 
        const [datas] = await db.query(sql,[req.query.id]);
        res.json(datas);

    })

module.exports = router;
