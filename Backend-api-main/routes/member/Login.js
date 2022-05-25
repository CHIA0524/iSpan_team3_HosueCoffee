const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();

router.get('/checkName',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})
router.get('/Login',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=? AND member_password=?`
  const [datas] = await db.query(sql,[req.query.member_account,member_password]);
  res.json(datas[0]);
})


module.exports = router;