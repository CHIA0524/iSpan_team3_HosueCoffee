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
        // "select `member_id`,`member_account`,`member_name`,`member_nick`,`member_birth`,`member_photo` from members join members_data on members.member_id = members_data.md_member_id";
        const [datas]=await db.query(sql);
        res.json(datas);

    })
router.route(`/:member_id`)
    .get(async(req,res,next)=>{
        const keyword = req.params.member_id
        const sql=
        "SELECT * FROM `members`"; 
        const [datas]=await db.query(sql);
        res.json(datas);

    })

module.exports = router;