const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../modules/mysql_config');
const upload = multer();

//GET　http://localhost:3001/home


router.route('/store')
    .get(async (req, res, next) => {
        const sql =
            "SELECT * FROM store where store_name =?";
        const [datas] = await db.query(sql, [req.query.store_name]);
        res.json(datas[0]);
    })
router.route('/news')
    .get(async (req, res, next) => {
        const sql =
            "SELECT * FROM `home_news` where `created_time` <= now() order by rand() limit 4";
        const [datas] = await db.query(sql);
        res.json(datas);
    })

router.route('/coupon')
    .get(async (req, res, next) => {
        const sql =
            "SELECT * FROM `home_coupon` where `coupon_end_date` >= now() order by rand() limit 3";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
router.route('/abc')
    .get(async (req, res, next) => {
        const sql =
            "SELECT * FROM `member_con` where fk_m_id=100001";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
router.route('/coupon/saved')
    .get(async (req, res, next) => {
        console.log(req.query.fk_m_id)
        const sql =
            "select count(*) as total from member_con where fk_m_id=? and fk_coupon_id=?";
        const [datas] = await db.query(sql, [req.query.fk_m_id, req.query.fk_coupon_id]);
        res.json(datas[0]);
    })
router.get('/coupon/saved/toMember', async (req, res, next) => {
    console.log(req.query.fk_m_id);
    console.log(req.query.fk_coupon_id);
    console.log(req.query.state);
    const sql = `INSERT INTO member_con(fk_m_id,fk_coupon_id,state) VALUES (?,?,?)`
    const [datas] = await db.query(sql, [req.query.fk_m_id, req.query.fk_coupon_id, req.query.state]);
    res.json(datas);

})
module.exports = router;