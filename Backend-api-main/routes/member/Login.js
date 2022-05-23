const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');
const upload = multer();
require("dotenv").config();

router.route('/account')
.post(function(req, res) {
    const { member_account, member_password } = req.body;
    db.query(
      `SELECT * FROM members WHERE member_account='${member_account}' AND member_password='${member_password}'`,
      function(err, rows, fields) {
        if (rows.length === 0) {
          return res.send({ error: 'ACCOUNT_NOT_EXIST' });
        };
        return res.send({ message: 'LOGIN_SUCCESSFULLY' });
      }
    );
  });


module.exports = router;