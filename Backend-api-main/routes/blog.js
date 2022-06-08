const express = require('express');
const router = express.Router();
// const multer = require('multer');
const db = require('../modules/mysql_config');
// const upload = multer();

//GET　http://localhost:30001/blog/
router.route('/')
    .get(async(req,res,next)=>{
        const sql ="SELECT * FROM blogs "
        const [data] = await db.query(sql);
        res.json(data);
    })
    router.route('/coffee')
    .get(async(req,res,next)=>{
        const sql ="SELECT * FROM `blogs` WHERE btype ='咖啡篇coffee'ORDER BY blog_id";
        const [data] = await db.query(sql);
        res.json(data);
    })
router.route('/id')
    .get(async(req,res,next)=>{
        const sql ="SELECT * FROM blogs  where blog_id=?"
        const [data] = await db.query(sql,[req.query.blog_id]);
        res.json(data);
    })

    router.route('/blogArticle')
    .get(async(req,res,next)=>{
        console.log(req.query.blog_id)
        const sql ="SELECT sencond_content,img_src FROM `blogs`JOIN blogs_content ON blogs.blog_id = blogs_content.b_id WHERE blog_id=? ORDER BY blog_p_id;";
        const [data] = await db.query(sql,[req.query.blog_id]);
        console.log(data)
        res.json(data);
    })   
   
    module.exports = router;