const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();



router.route('/')
//^查詢本帳號所有問答^
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * FROM `member_QA` where fk_member_id=?"; 
        const [datas]=await db.query(sql,[req.query.fk_member_id]);
        res.json(datas);

    })
router.route('/id')
//^查詢特定一筆問答^
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * FROM `member_QA` where QA_id=?"; 
        const [datas] = await db.query(sql,[req.query.QA_id]);
        res.json(datas);

    })

module.exports = router;
