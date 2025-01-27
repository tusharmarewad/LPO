const pool = require("../config/db");

exports.getuser = async () => {
   const [rows] = await pool.query("SELECT * FROM users");
   return rows;
};

exports.addUser = async()=>{
   
}