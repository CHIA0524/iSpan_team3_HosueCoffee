const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();



router.route(`/`)
//^查詢本帳號所有基本資料^
    .get(async(req,res,next)=>{
        console.log(req.query.member_id);
        // const member_id = req.params.member_id ;
        const sql=
        "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.fk_member_id where member_id= ?" ;
        const [datas]=await db.query(sql,[req.query.member_id]);
        // console.log(datas)
        res.json(datas);

    })
router.route(`/UPdate`)
//^更新本帳號基本資料^
    .get(async(req,res,next)=>{
      
        const sql=
        "UPDATE members_data SET member_name=?,member_nick=?,member_birth=?,member_phone=?,member_address=? WHERE fk_member_id=?;"
        const [datas]=await db.query(sql,[req.query.member_name,req.query.member_nick,req.query.member_birth,req.query.member_phone,req.query.member_address,req.query.fk_member_id]);
        console.log(datas)
        res.json(datas);

    })
router.route(`/Newdate`)
//^建立本帳號資料(姓名、電話...等)^
    .get(async(req,res,next)=>{
        const sql=
        "INSERT INTO members_data(member_name,member_nick,member_birth,member_phone,member_address,fk_member_id) VALUES (?,?,?,?,?,?);"
        const [datas]=await db.query(sql,[req.query.member_name,req.query.member_nick,req.query.member_birth,req.query.member_phone,req.query.member_address,req.query.fk_member_id]);
        console.log(datas)
        res.json(datas);

    })

module.exports = router;