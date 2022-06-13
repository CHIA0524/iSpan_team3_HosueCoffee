const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

/* GET users listing. */
//GET　http://localhost:3001/menu

router.route('/')
.get(async (req,res,next)=>{
    const sql = "SELECT drink_menu.drink_name,`id`, `price`, `url`,`content`FROM `drink_menu` ;"
    const [datas] = await db.query(sql);
    res.json(datas);
})


module.exports = router;
