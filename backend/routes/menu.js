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

router.route('/oder')
.get(async (req,res,next)=>{
    const sql = "SELECT id, pay, orderer, phone, odertime, drink_total_price FROM drink_order order by id DESC limit 1;"
    const [datas] = await db.query(sql);
    res.json(datas);
})


router.route('/today')
.get(async (req,res,next)=>{
    const sql = 
    "SELECT * FROM `drink_menu` WHERE `menutype`= '每日精選' order by id";
    const [datas] = await db.query(sql);
    res.json(datas);
})
router.route('/icecoffee')
.get(async (req,res,next)=>{
    const sql = 
    "SELECT * FROM `drink_menu` WHERE `menutype`= '冰飲咖啡' order by id";
    const [datas] = await db.query(sql);
    res.json(datas);
})
router.route('/hotcoffee')
.get(async (req,res,next)=>{
    const sql = 
    "SELECT * FROM `drink_menu` WHERE `menutype`= '熱飲咖啡' order by id";
    const [datas] = await db.query(sql);
    res.json(datas);
})

router.get('/inmenu',async (req,res)=>{
    const sql = `INSERT INTO drink_order(pay, orderer, phone, odertime, drink_total_price) VALUES (?,?,?,?,?)`
    const [datas] = await db.query(sql,[req.query.pay, req.query.orderer, req.query.phone, req.query.odertime, req.query.drink_total_price]);
  })


  router.get('/area',async (req,res,next)=>{
    const sql = "SELECT DISTINCT city FROM `store` ;"
    const [datas] = await db.query(sql);
    res.json(datas);
    
  })
  
router.get('/areastore',async (req,res,next)=>{
    const sql = "SELECT store_name FROM store where city=?;"
    const [datas] = await db.query(sql,[req.query.city]);
    res.json(datas);

})

module.exports = router;
