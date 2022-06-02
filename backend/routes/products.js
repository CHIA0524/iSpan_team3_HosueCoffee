const express = require('express');
const router = express.Router();

//GET　http://localhost:3001/categories/
router.route('/')
    .get((req,res,next)=>{
        res.send("回傳所有資料")
    })
    .post((req,res,next)=>{
        res.send("新增資料")
    })
   

router.route('/:id')
    .get((req,res,next)=>{
        const id = req.params.id;
        res.send(`讀取${id}的資料`)
    })
    .put((req,res,next)=>{
        const id = req.params.id;
        res.send(`修改${id}的資料`)
        
    })
    .delete((req,res,next)=>{
        const id = req.params.id;
        res.send(`刪除${id}的資料`)        
    })

module.exports = router;
