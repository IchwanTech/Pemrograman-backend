//Ini file koneksi DB

import mysql from "mysql2";

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bismillah",
  database: "express_mysql",
});

export default connect;
