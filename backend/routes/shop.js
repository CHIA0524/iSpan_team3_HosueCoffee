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
    router.route('/rec')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT * FROM `products` order by rand()";
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
    
    //收藏頁面
    router.route('/wishlist')
    .get(async (req,res,next)=>{
        const sql = "SELECT count(*) as total FROM `member_favorite` WHERE fk_m_id=? and fk_p_id=?";
        const [datas] = await db.query(sql,[req.query.fk_m_id,req.query.fk_p_id]);
       res.json(datas[0]);
      //  res.send(`讀取${id}的資料`)
    })

    //新增收藏
    router.route('/wishlist/add')
    .get(async (req,res,next)=>{
        const sql = `INSERT INTO member_favorite(fk_m_id, fk_p_id)
        VALUES (?, ?)`;
        const [datas] = await db.query(sql,[req.query.fk_m_id,req.query.fk_p_id]);
      
    })

    //刪除收藏
    router.route('/wishlist/delete')
    .get(async (req,res,next)=>{
        const sql = `DELETE FROM team3.member_favorite WHERE fk_m_id=?AND fk_p_id=?`;
        const [datas] = await db.query(sql,[req.query.fk_m_id,req.query.fk_p_id]);
      
    })

    //新增收藏
    router.route('/shopcart/')
    .get(async (req,res,next)=>{
        const sql = `INSERT INTO member_favorite(fk_m_id, fk_p_id)
        VALUES (?, ?)`;
        const [datas] = await db.query(sql,[req.query.fk_m_id,req.query.fk_p_id]);
      
    })
    







    

module.exports = router;


