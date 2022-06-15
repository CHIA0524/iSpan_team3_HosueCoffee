const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();



/* GET users listing. */
//GET　http://localhost:3001/menu

router.route('/')
.get(async (req,res,next)=>{
    const sql = "SELECT drink_menu.drink_name,`id`, `price`, `url`,`content`,`menutype`FROM `drink_menu` ;"
    const [datas] = await db.query(sql);
    res.json(datas);
})


router.get('/menucreate',async (req,res,next)=>{
    //^創建新的帳號^
    const sql = `INSERT INTO drink_order_detail(fk_drink_order_id, fk_drink_menu_id, qty) VALUES (?,?,?)`
    const [datas] = await db.query(sql,[req.query.member_mail,req.query.member_account,req.query.member_password,req.query.member_point]);
    res.json(datas);
    
  })
router.get('/area',async (req,res,next)=>{
    //^創建新的帳號^
    const sql = "SELECT DISTINCT city FROM `store` ;"
    const [datas] = await db.query(sql);
    res.json(datas);
    
  })
router.get('/areastore',async (req,res,next)=>{
    //^創建新的帳號^
    const sql = "SELECT store_name FROM store where city='高雄市';"
    const [datas] = await db.query(sql,[req.query.city]);
    res.json(datas);
    
  })
  router.get('/oder',async (req,res,next)=>{
    //^創建新的帳號^
    const sql = "SELECT id, pay, fk_store_id, orderer, phone, odertime FROM drink_order order by id DESC limit 1;"
    const [datas] = await db.query(sql);
    res.json(datas);
    console.log(datas);
  })

module.exports = router;
