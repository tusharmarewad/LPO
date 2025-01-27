const mysql = require('mysql2');


// require('dotenv').config();
const pool = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'practise'
})



module.exports = pool.promise();
