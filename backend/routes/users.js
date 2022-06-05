var express = require('express');
const { route } = require('./categories');
var router = express.Router();
const db = require('../modules/mysql_config');
const multer = require('multer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/checkName',async (req,res,next)=>{
  const sql = `SELECT Count(*) as total FROM members WHERE member_account=?`
  const [datas] = await db.query(sql,[req.query.member_account]);
  res.json(datas[0]);
})

//上傳檔案的設定
const ext={
  'image/jpeg':'.jpg',
  'image/png':'.png',
}
console.log(ext['image/png'])

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


module.exports = router;
