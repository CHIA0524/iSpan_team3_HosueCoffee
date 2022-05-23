const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();


router.route('/')
    .get(async(req,res,next)=>{
        const sql=
        "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.md_member_id" ;
        const [datas]=await db.query(sql);
        res.json(datas);

    })
router.route(`/:member_id`)
    .get(async(req,res,next)=>{
        const member_id = req.params.member_id ;
        const sql=
        "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.md_member_id where member_id= ?" ;
        const [datas]=await db.query(sql,[member_id]);
        res.json(datas);

    })
module.exports = router;