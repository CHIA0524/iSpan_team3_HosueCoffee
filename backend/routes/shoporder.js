const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

//GET　http://localhost:3001/shoporder
router.route('/')
    .get(async (req,res,next)=>{
        const sql = 
        "select * from order_detail join orders on order_detail.fk_o_id = orders.o_id join products on order_detail.fk_p_id = products.p_id order by o_id";
        const [datas]=await db.query(sql,[req.query.fk_member_id]);
        res.json(datas);
    })

router.route('/coupon')
//^查詢本帳號優惠券^
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * from member_con JOIN home_coupon ON member_con.fk_coupon_id= home_coupon.CP_id WHERE fk_m_id=?"; 
        const [datas] = await db.query(sql,[req.query.fk_m_id]);
        res.json(datas);

    })

    router.route('/coupon')
//^查詢本帳號優惠券^
    .get(async(req,res,next)=>{
        const sql=
        "SELECT * from member_con JOIN home_coupon ON member_con.fk_coupon_id= home_coupon.CP_id WHERE fk_m_id=?"; 
        const [datas] = await db.query(sql,[req.query.fk_m_id]);
        res.json(datas);

    })

    router.route('/point')
    //^查詢本帳號紅利點數^
    .get(async(req,res,next)=>{
        const sql=
        "SELECT member_point from members where member_id= ?;"; 
        const [datas] = await db.query(sql,[req.query.member_id]);
        res.json(datas[0]);
        console.log(datas[0]);

    })

    router.route('/order')
    //^訂單寫入資料庫^
    .get(async(req,res,next)=>{
        const sql=
        "INSERT INTO `orders`( `fk_member_id`,`shipment`,`pay`,`order_condition`,`buy_name`,`buy_phone`,`buy_email`,`buy_address`,`recipient_name`,`recipient_phone`,`recipient_email`,`recipient_address`,`remark`,`used_coupon`,`used_points`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"; 
        const [datas] = await db.query(sql,[
            req.query.fk_member_id,
            req.query.shipment,
            req.query.pay,
            req.query.order_condition,
            req.query.buy_name,
            req.query.buy_phone,
            req.query.buy_email,
            req.query.buy_address,
            req.query.recipient_name,
            req.query.recipient_phone,
            req.query.recipient_email,
            req.query.recipient_address,
            req.query.remark,
            req.query.used_coupon,
            req.query.used_points]);
            res.json(datas)

    })




    module.exports = router;