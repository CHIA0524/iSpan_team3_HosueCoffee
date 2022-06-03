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

    router.route('/ProductDetail/id')
    .get(async (req,res,next)=>{
        const id = req.params.id;
        const sql = "SELECT * FROM `products` WHERE p_id= ?";
        const [datas] = await db.query(sql,[req.query.id]);
       res.json(datas);
      //  res.send(`讀取${id}的資料`)
    })

    

module.exports = router;


