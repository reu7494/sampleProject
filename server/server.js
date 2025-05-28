const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "ccia",
  password: "Ksarohb220**",
  database: "checkListDB",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
  } else {
    console.log("MySQL 연결 성공");
  }
});
