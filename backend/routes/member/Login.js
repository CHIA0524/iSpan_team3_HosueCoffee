const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();

//----註冊----
router.get('/checkName',async (req,res,next)=>{
  //^驗證會員帳號是否被註冊過^
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})

router.get('/checkmail',async (req,res,next)=>{
  //^驗證信箱是否被註冊過^
  const sql = `SELECT Count(*) as total FROM members WHERE member_mail=?`
  const [datas] = await db.query(sql,[req.query.member_mail]);
  res.json(datas[0]);
})

router.get('/checkPhone',async (req,res,next)=>{
  //^驗證電話是否已被註冊^
  const sql = `SELECT Count(*) as total FROM members_data WHERE member_phone=?`
  const [datas] = await db.query(sql,[req.query.member_phone]);
  res.json(datas[0]);
})

router.get('/CRNM',async (req,res,next)=>{
  //^創建新的帳號^
  const sql = `INSERT INTO members (member_mail, member_account,member_password,member_point,login_status) VALUES (?,?,?,?,?)`
  const [datas] = await db.query(sql,[req.query.member_mail,req.query.member_account,req.query.member_password,req.query.member_point,req.query.login_status]);
  res.json(datas);
  
})

//----登入----

router.post('/LoginTF',async (req,res,next)=>{
  //^比對帳號密碼是否正確^
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  res.json(data[0]);
})

router.post('/Loginid',async (req,res,next)=>{
  //^取的會員帳號密碼信箱^
  const sql = `select *  from members WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  res.json(data[0]);
})
router.post('/LoginData',async (req,res,next)=>{
  //^登入後確認是否有會員基本資料(姓名、電話等)^
  const sql = `select Count(*) as total from members join members_data on members.member_id = members_data.fk_member_id WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  res.json(data[0]);
})
router.post('/Login',async (req,res,next)=>{
  //^登入後取的所有會員資料^
  const sql = `select * from members join members_data on members.member_id = members_data.fk_member_id WHERE member_account=? and member_password=?`
  const [data] =  await db.query(sql,[req.query.member_account,req.query.member_password]);
  res.json(data[0]);
})
router.get('/LoginstatusY',async (req,res,next)=>{
  //^登入後更新登入狀態^
  const sql = `UPDATE members SET login_status='1' WHERE member_id=?`
  console.log(req.query.member_id)
  const [data] =  await db.query(sql,[req.query.member_id]);
  res.json(data[0]);
})
router.get('/LoginstatusN',async (req,res,next)=>{
  //^登入後更新登入狀態^
  const sql = `UPDATE members SET login_status='0' WHERE member_id=?`
  console.log(req.query.member_id)
  const [data] =  await db.query(sql,[req.query.member_id]);
  res.json(data[0]);
})

//----修改密碼----
router.get('/checkPassword',async (req,res,next)=>{
  //^修改密碼時驗證舊是否正確^
  const sql = `SELECT Count(*) as total FROM members WHERE member_password=? and member_id=?`
  const [datas] = await db.query(sql,[req.query.member_password,req.query.member_id]);
  res.json(datas[0]);
})


router.get('/getoldPassword',async (req,res,next)=>{
  //^修改密碼時驗證正確，將舊密碼回傳^
  const sql = `SELECT * FROM members WHERE member_password=? and member_id=?`
  const [datas] = await db.query(sql,[req.query.member_password,req.query.member_id]);
  res.json(datas[0]);
})
router.get('/changePassword',async (req,res,next)=>{
  //^修改會員密碼^
  const sql = `UPDATE members SET member_password=? WHERE member_id=?`
  const [datas] = await db.query(sql,[req.query.member_password,req.query.member_id]);
  res.json(datas[0]);
})

router.get('/Favfavorite',async (req,res,next)=>{
  //^搜尋本帳號收藏的商品用收藏日期排列^
  const sql = `select * from member_favorite join products on products.p_id = member_favorite.fk_p_id where fk_m_id=? order by MF_id desc`
  const [data] = await db.query(sql,[req.query.fk_m_id]);
  res.json(data);
  
})
router.get('/Favfavorite/TT',async (req,res,next)=>{
  //^搜尋本帳號收藏的商品用收藏日期排列^
  const sql = `select count(*) as total from member_favorite join products on products.p_id = member_favorite.fk_p_id where fk_m_id=? `
  const [data] = await db.query(sql,[req.query.fk_m_id]);
  res.json(data[0]);
  
})
router.get('/Favfavorite/DF',async (req,res,next)=>{
  //^刪除收藏的商品^
  const sql = `DELETE FROM member_favorite where MF_id=? `
  const [data] = await db.query(sql,[req.query.MF_id]);
  
})

module.exports = router;