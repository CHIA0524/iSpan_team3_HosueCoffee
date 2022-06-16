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
router.route('/today')
.get(async (req,res,next)=>{
    const sql = 
    "SELECT * FROM `products` WHERE `coffeetype`= '哥倫比亞' order by p_id";
    const [datas] = await db.query(sql);
    res.json(datas);
})


router.get('/inmenu',async (req,res,next)=>{
    //^創建新的帳號^
    const sql = `INSERT INTO drink_order_detail(orderer, phone, odertime) VALUES (?,?,?)`
    const [datas] = await db.query(sql,[req.query.orderer, req.query.phone, req.query.odertime]);
  })

  router.get('/total',async(req,res)=>{
    //^創建新的帳號^
    console.log(req.query.gototal)
  })

module.exports = router;
