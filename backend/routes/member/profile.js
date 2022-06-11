const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
// const upload = multer();
require("dotenv").config();



router.route(`/`)
//^查詢本帳號所有基本資料^
    .get(async(req,res,next)=>{
        console.log(req.query.member_id);
        // const member_id = req.params.member_id ;
        const sql=
        "select `member_account`,`member_name`,`member_nick`,`member_birth`,`member_phone`,`member_mail`,`member_address`from members join members_data on members.member_id = members_data.fk_member_id where member_id= ?" ;
        const [datas]=await db.query(sql,[req.query.member_id]);
        // console.log(datas)
        res.json(datas);

    })
router.route(`/UPdate`)
//^更新本帳號基本資料^
    .get(async(req,res,next)=>{
      
        const sql=
        "UPDATE members_data SET member_name=?,member_nick=?,member_birth=?,member_phone=?,member_address=?,member_photo=? WHERE fk_member_id=?;"
        const [datas]=await db.query(sql,[req.query.member_name,req.query.member_nick,req.query.member_birth,req.query.member_phone,req.query.member_address,req.query.member_photo,req.query.fk_member_id]);
        console.log(datas)
        res.json(datas);

    })
router.route(`/Newdate`)
//^建立本帳號資料(姓名、電話...等)^
    .get(async(req,res,next)=>{
        const sql=
        "INSERT INTO members_data(member_name,member_nick,member_birth,member_phone,member_address,fk_member_id) VALUES (?,?,?,?,?,?);"
        const [datas]=await db.query(sql,[req.query.member_name,req.query.member_nick,req.query.member_birth,req.query.member_phone,req.query.member_address,req.query.fk_member_id]);
        console.log(datas)
        res.json(datas);

    })

    //上傳檔案的設定
    const ext={
        'image/jpeg':'.jpg',
        'image/png':'.png',
      }
      // console.log(ext['image/png'])
      
      const storage =multer.diskStorage({
        destination:(req,file,cb)=>{
          cb(null,'public/uploads')
        },
        filename:(req,file,cb)=>{
          cb(null,new Date().getTime()+ext[file.mimetype])
        }
      })
      const fileFilter=(req,file,cb)=>{
        cb(null,!!ext[file.mimetype])
      }
      
      const upload=multer({storage,fileFilter})
    
router.post('/upphoto',upload.single("file"),async(req,res)=>{
  //req.body 接收表單透過POST fromdata 傳過來的文字資料
  //req.file 會接收上傳的檔案
  console.log(upload)
  // console.log(req.body.fk_member_id);
  console.log(req.file.filename)
  // //res.send(`POST:${req.body.email} - ${req.body.pwd}`)
  // const sql = "UPDATE `team3`.`members_data` SET `member_photo` = ? WHERE (`fk_member_id` = ?);";
  // const [data] = await db.query(sql, [req.file.filename, req.body.fk_member_id])      
  // res.send(`上傳檔案名稱為 ${req.file.filename}`)
  // res.send(req.body.fk_member_id)
  res.json(req.file.filename)
})





// router.post('/upphoto',upload.single("upPhoto"),(req,res)=>{

//     console.log(req.body);
//     console.log(req.file)
// })
module.exports = router;