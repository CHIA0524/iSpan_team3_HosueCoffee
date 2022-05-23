const express = require('express');
const db=require('./config/db')
const app = express();
const port = 3001; // your server port
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`)
});
db.query('select * from members', function(err, rows) {
    if (err) throw err;
    console.log('Response: ', rows);
  });
  app.post("../src/pages/member/memberlogin", function(req, res) {
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