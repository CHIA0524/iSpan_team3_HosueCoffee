const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();


// router.route('/')
//     .get(async(req,res,next)=>{
//         const sql=
//         "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.fk_member_id" ;
//         const [datas]=await db.query(sql);
//         res.json(datas);

//     })
router.route(`/`)
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
    .get(async(req,res,next)=>{
      
        const sql=
        "UPDATE members_data SET member_name=?,member_nick=?,member_birth=?,member_phone=?,member_address=? WHERE fk_member_id=?;"
        const [datas]=await db.query(sql,[req.query.member_name,req.query.member_nick,req.query.member_birth,req.query.member_phone,req.query.member_address,req.query.fk_member_id]);
        console.log(datas)
        res.json(datas);

    })
router.route(`/Newdate`)
    .get(async(req,res,next)=>{
        console.log(req.query.member_name);
        console.log(req.query.member_nick);
        console.log(req.query.member_birth);
        console.log(req.query.member_phone);
        console.log(req.query.member_address);
        console.log(req.query.fk_member_id);
        const sql=
        "INSERT INTO members_data(member_name,member_nick,member_birth,member_phone,member_address,fk_member_id) VALUES (?,?,?,?,?,?);"
        const [datas]=await db.query(sql,[req.query.member_name,req.query.member_nick,req.query.member_birth,req.query.member_phone,req.query.member_address,req.query.fk_member_id]);
        console.log(datas)
        res.json(datas);

    })

module.exports = router;