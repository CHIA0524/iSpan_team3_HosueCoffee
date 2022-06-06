const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

//GET　http://localhost:3001/home

router.route('/coupon')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `home_coupon` where `coupon_end_date` >= now() order by rand() limit 3";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
router.route('/coupon/saved')
    .get(async (req,res,next)=>{
        console.log(req.query.fk_m_id)
        const sql = 
        "select count(*) as total from member_con where fk_m_id=? and fk_coupon_id=?";
        const [datas] = await db.query(sql,[req.query.fk_m_id,req.query.fk_coupon_id]);
        res.json(datas[0]);
    })

module.exports = router;