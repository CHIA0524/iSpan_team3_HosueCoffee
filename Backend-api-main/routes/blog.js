const express = require('express');
const router = express.Router();
// const multer = require('multer');
const db = require('../modules/mysql_config');
// const upload = multer();

//GET　http://localhost:3600/blog/
router.route('/')
    .get(async(req,res,next)=>{
        const sql ="SELECT * FROM blogs;"
        const [data] = await db.query(sql);
        res.json(data);
    })
   
   
    module.exports = router;