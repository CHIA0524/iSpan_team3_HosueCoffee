const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();


router.get('/checkName',async (req,res,next)=>{
  // const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})

router.get('/checkmail',async (req,res,next)=>{
  // const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const sql = `SELECT Count(*) as total FROM members WHERE member_mail=?`
  const [datas] = await db.query(sql,[req.query.member_mail]);
  res.json(datas[0]);
})

router.get('/checkPassword',async (req,res,next)=>{
  // const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  console.log(req.query.member_password);
  console.log(req.query.member_id);
  const sql = `SELECT Count(*) as total FROM members WHERE member_password=? and member_id=?`
  const [datas] = await db.query(sql,[req.query.member_password,req.query.member_id]);
  res.json(datas[0]);
})

router.get('/checkPhone',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members_data WHERE member_phone=?`
  const [datas] = await db.query(sql,[req.query.member_phone]);
  console.log(datas)
  res.json(datas[0]);
})

router.get('/getoldPassword',async (req,res,next)=>{
  // const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  console.log(req.query.member_password);
  console.log(req.query.member_id);
  const sql = `SELECT * FROM members WHERE member_password=? and member_id=?`
  const [datas] = await db.query(sql,[req.query.member_password,req.query.member_id]);
  res.json(datas[0]);
})
router.post('/LoginTF',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  console.log(data);
  res.json(data[0]);
})

router.post('/Loginid',async (req,res,next)=>{
  console.log(req.query.member_account);
  const sql = `select *  from members WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  console.log(data)
  res.json(data[0]);
})
router.post('/LoginData',async (req,res,next)=>{
  console.log(req.query.member_account);
  const sql = `select Count(*) as total from members join members_data on members.member_id = members_data.fk_member_id WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  console.log(data)
  res.json(data[0]);
})
router.post('/Login',async (req,res,next)=>{
  console.log(req.query.member_account);
  const sql = `select * from members join members_data on members.member_id = members_data.fk_member_id WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  console.log(data)
  res.json(data[0]);
})

router.get('/changePassword',async (req,res,next)=>{
  console.log(req.query.member_password);
  console.log(req.query.member_id);
  const sql = `UPDATE members SET member_password=? WHERE member_id=?`
  const [datas] = await db.query(sql,[req.query.member_password,req.query.member_id]);
  res.json(datas[0]);
})
router.get('/CRNM',async (req,res,next)=>{
  console.log(req.query.member_mail);
  console.log(req.query.member_account);
  console.log(req.query.member_password);
  const sql = `INSERT INTO members (member_mail, member_account,member_password) VALUES (?,?,?)`
  const [datas] = await db.query(sql,[req.query.member_mail,req.query.member_account,req.query.member_password]);
  res.json(datas);
  console.log("gogo")
  
})
router.get('/CRNM2',async (req,res,next)=>{
  console.log(req.query.member_mail);
  console.log(req.query.member_account);
  console.log(req.query.member_password);
  const sql = `select * from members where member_mail=? and member_account=? and member_password=?`
  const [data] = await db.query(sql,[req.query.member_mail,req.query.member_account,req.query.member_password]);
  console.log(data);
  res.json(data);
  
})
router.get('/Favfavorite',async (req,res,next)=>{
  console.log(req.query.fk_m_id);
  const sql = `select * from member_favorite join products on products.p_id = member_favorite.fk_p_id where fk_m_id=? order by MF_id desc`
  const [data] = await db.query(sql,[req.query.fk_m_id,]);
  console.log(data);
  res.json(data);
  
})
router.get('/Favfavorite/DF',async (req,res,next)=>{
  console.log(req.query.MF_id);
  const sql = `DELETE FROM member_favorite where MF_id=? `
  const [data] = await db.query(sql,[req.query.MF_id,]);
  
})

module.exports = router;