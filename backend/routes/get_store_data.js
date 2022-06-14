const express = require('express');
const router = express.Router();
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
var fs = require('fs');

router.get("/", async (req, res) => {
    try {
      nightmare
        .goto("https://www.starbucks.com.tw/stores/storesearch.jspx")
        .wait('.store_name')
        .evaluate(function () {
          let links = document.querySelectorAll(".store_data");
          let storeListArray = []
          for (let i = 0; i < links.length; i++) {
            let storeListObj = {}
            storeListObj.store_name = links[i].childNodes[0].childNodes[0].innerText
            storeListObj.store_add = links[i].childNodes[0].childNodes[1].innerText
            storeListArray.push(storeListObj)
          }
          return storeListArray
        })
        .end()
          .then(function(result){
              console.log(result)
              res.send(result)
          })
          .catch(function(error){
              console.log(error)
          })
    } catch (err) {
      return res.status(500).json({
        err: err.toString(),
      });
    }
  });

  module.exports = router;

