const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();
require("dotenv").config();




//GET http://localhost:3001/store
router.route('/')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT store.id, `store_name`, `city`, `area`, `address`, `lat`, `lng`, `phone`, `photo`, group_concat( DISTINCT dow, ':', `status_name`, ' ', LEFT(start_time, 5), '-', LEFT(end_time, 5) ORDER BY store_time.id) AS `times`, group_concat( DISTINCT `icon` order by ss_ssi.ssi_id) AS `icon_group`, group_concat( DISTINCT `serve_name` order by ss_ssi.ssi_id) AS `serve_name` FROM `store` LEFT JOIN `store_time` ON store_time.fk_store_id = store.id LEFT JOIN (SELECT `fk_store_id`, store_serve_icon.id as ssi_id, `icon`, `serve_name` FROM `store_serve` LEFT JOIN `store_serve_icon` on `fk_serve_id` = store_serve_icon.id WHERE serve_status = 1) AS ss_ssi ON ss_ssi.fk_store_id = store.id GROUP BY store.id ORDER BY id";
        const [data] = await db.query(sql);
        res.json(data);
    })
    
router.route('/getServeList')
    .get(async (req,res,next)=>{
        const sql = 
        "SELECT serve_name FROM store_serve_icon ORDER BY id";
        const [data] = await db.query(sql);
        console.log('123');
        res.json(data);
    })

//PUT http://localhost:3001/store/id/lat/lng
router.route('/:id/:lat/:lng')
    .put(upload.none(), async (req,res,next)=>{
        let output = {
            ok:false
        }
        const id = req.params.id;
        const lat = req.params.lat;
        const lng = req.params.lng;
        const sql = 
        "UPDATE store SET `lat` = ?, `lng`= ? WHERE id = ?";
        const [data] = await db.query(sql, [lat, lng, id]);
        if(data.affectedRows === 1){
            output.ok = true;
        }
        res.json(output);
    })

//GET http://localhost:3001/store/map/keyword
router.route('/:keyword')
    .get(async (req,res,next)=>{
        const keyword = '%' + req.params.keyword + '%';
        const sql = 
        "SELECT store.id, `store_name`, `city`, `area`, `address`, `lat`, `lng`, `phone`, `photo`, group_concat( DISTINCT dow, ':', `status_name`, ' ', LEFT(start_time, 5), '-', LEFT(end_time, 5) ORDER BY store_time.id) AS `times`, group_concat( DISTINCT `icon` order by ss_ssi.ssi_id) AS `icon_group`, group_concat( DISTINCT `serve_name` order by ss_ssi.ssi_id) AS `serve_name` FROM `store` LEFT JOIN `store_time` ON store_time.fk_store_id = store.id LEFT JOIN (SELECT `fk_store_id`, store_serve_icon.id as ssi_id, `icon`, `serve_name` FROM `store_serve` LEFT JOIN `store_serve_icon` on `fk_serve_id` = store_serve_icon.id WHERE serve_status = 1) AS ss_ssi ON ss_ssi.fk_store_id = store.id WHERE store_name like ? or address like ? or city like ? GROUP BY store.id ORDER BY id";
        const [data] = await db.query(sql, [keyword, keyword, keyword]);
        res.json(data);
    })

router.route('/getCityList')
    .get(async (req,res,next)=>{
        const keyword = '%' + req.params.keyword + '%';
        const sql = 
        "SELECT store.id, `store_name`, `city`, `area`, `address`, `lat`, `lng`, `phone`, group_concat( DISTINCT dow, ':', `status_name`, ' ', LEFT(start_time, 5), '-', LEFT(end_time, 5) ORDER BY store_time.id) AS `times`, group_concat( DISTINCT `icon` order by ss_ssi.ssi_id) AS `icon_group`, group_concat( DISTINCT `serve_name` order by ss_ssi.ssi_id) AS `serve_name` FROM `store` LEFT JOIN `store_time` ON store_time.fk_store_id = store.id LEFT JOIN (SELECT `fk_store_id`, store_serve_icon.id as ssi_id, `icon`, `serve_name` FROM `store_serve` LEFT JOIN `store_serve_icon` on `fk_serve_id` = store_serve_icon.id WHERE serve_status = 1) AS ss_ssi ON ss_ssi.fk_store_id = store.id WHERE store_name like ? or address like ? or city like ? GROUP BY store.id ORDER BY id";
        const [data] = await db.query(sql, [keyword, keyword, keyword]);
        res.json(data);
    })



module.exports = router;

