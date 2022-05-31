var express = require('express');
const { route } = require('./categories');
var router = express.Router();
const db = require('../modules/mysql_config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/checkName',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})

module.exports = router;
