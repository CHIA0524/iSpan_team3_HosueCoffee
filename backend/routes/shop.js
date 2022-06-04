const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();


//GET　http://localhost:3001/shop

    router.route('/')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `products` order by p_id";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
    
    //肯亞
    router.route('/kenya')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `products` WHERE `coffeetype`= '肯亞' order by p_id";
        const [datas] = await db.query(sql);
        res.json(datas);
    })

    //衣索比亞
    router.route('/ethiopia')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `products` WHERE `coffeetype`= '衣索比亞' order by p_id";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
    //巴西
    router.route('/brazil')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `products` WHERE `coffeetype`= '巴西' order by p_id";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
     //哥倫比亞
     router.route('/colombia')
     .get(async (req,res,next)=>{
         const sql = 
         "SELECT * FROM `products` WHERE `coffeetype`= '哥倫比亞' order by p_id";
         const [datas] = await db.query(sql);
         res.json(datas);
     })
      //瓜地馬拉
    router.route('/guatemala')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `products` WHERE `coffeetype`= '瓜地馬拉' order by p_id";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
     //其他
     router.route('/other')
     .get(async (req,res,next)=>{
         const sql = 
         "SELECT * FROM `products` WHERE `coffeetype`= '其他' order by p_id";
         const [datas] = await db.query(sql);
         res.json(datas);
     })

    router.route('/ProductDetail/id')
    .get(async (req,res,next)=>{
        const id = req.params.id;
        const sql = "SELECT * FROM `products` WHERE p_id= ?";
        const [datas] = await db.query(sql,[req.query.id]);
       res.json(datas);
      //  res.send(`讀取${id}的資料`)
    })

    

module.exports = router;


