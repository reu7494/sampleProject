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

app.post("/signup", (req, res) => {
  const { userId, userPassword } = req.body;
  const sql = "INSERT INTO users (userId, userPassword) VALUES (?, ?)";
  db.query(sql, [userId, userPassword], (err, result) => {
    if (err) return res.status(500).json({ message: "DB 오류" });
    res.status(201).json({ message: "회원가입 성공" });
  });
});

// 로그인 API
app.post("/login", (req, res) => {
  const { userId, userPassword } = req.body;
  const sql = "SELECT * FROM users WHERE userId = ? AND userPassword = ?";
  db.query(sql, [userId, userPassword], (err, result) => {
    if (err) return res.status(500).json({ message: "DB 오류" });
    if (result.length > 0) {
      res.json({ message: "로그인 성공" });
    } else {
      res.status(401).json({ message: "로그인 실패" });
    }
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
