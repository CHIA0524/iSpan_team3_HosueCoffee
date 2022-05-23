const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();
require("dotenv").config();




//GET　http://localhost:3001/store/map

router.route('/')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT store.id, `store_name`, `city`, `address`, `phone`, group_concat( DISTINCT dow, ':', `status_name`, ' ', LEFT(start_time, 5), '-', LEFT(end_time, 5) ORDER BY store_time.id) AS `times`, group_concat( DISTINCT `icon` order by ss_ssi.ssi_id) AS `icon_group`, group_concat( DISTINCT `serve_name` order by ss_ssi.ssi_id) AS `serve_name` FROM `store` LEFT JOIN `store_time` ON store_time.fk_store_id = store.id LEFT JOIN (SELECT `fk_store_id`, store_serve_icon.id as ssi_id, `icon`, `serve_name` FROM `store_serve` LEFT JOIN `store_serve_icon` on `fk_serve_id` = store_serve_icon.id WHERE serve_status = 1) AS ss_ssi ON ss_ssi.fk_store_id = store.id GROUP BY store.id ORDER BY id";
        const [datas] = await db.query(sql);
        res.json(datas);
    })

module.exports = router;

