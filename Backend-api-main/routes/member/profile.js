const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();


// router.route('/')
//     .get(async(req,res,next)=>{
//         const sql=
//         "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.md_member_id" ;
//         const [datas]=await db.query(sql);
//         res.json(datas);

//     })
router.route(`/`)
    .get(async(req,res,next)=>{
        console.log(req.query.member_id);
        // const member_id = req.params.member_id ;
        const sql=
        "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.md_member_id where member_id= ?" ;
        const [datas]=await db.query(sql,[req.query.member_id]);
        console.log(datas)
        res.json(datas);

    })
router.route(`/UPdata`)
    .get(async(req,res,next)=>{
        console.log(req.query.member_id);
        const sql=
        "UPDATA members_data SET member_name=?,member_nick=?,member_birth=?,member_phone=?,member_address=? where member_id=?"
        const [datas]=await db.query(sql,[req.query.member_id],[req.query.member_neme],[req.query.member_nick]
                                        ,[req.query.member_birth],[req.query.member_phone],[req.query.member_address]);
        console.log(datas)
        res.json(datas);

    })
module.exports = router;