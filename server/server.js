require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: "alskjghKJH$OIW$Uh",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "ccia",
  password: "Ksarohb220**",
  database: "checkListDB",
});
db.connect((err) => {
  if (err) console.error("DB 연결 실패:", err);
  else console.log("DB 연결 성공");
});

// 로그인 API
app.post("/login", (req, res) => {
  const { userId, userPassword } = req.body;
  const sql = "SELECT * FROM users WHERE userId = ? AND userPassword = ?";
  db.query(sql, [userId, userPassword], (err, result) => {
    if (err) return res.status(500).json({ message: "DB 오류" });

    if (result.length > 0) {
      req.session.userId = userId;
      res.json({ message: "로그인 성공", userId });
    } else {
      res.status(401).json({ message: "로그인 실패" });
    }
  });
});

//로그아웃
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "로그아웃 실패" });
    res.clearCookie("connect.sid");
    res.json({ message: "로그아웃 성공" });
  });
});

//회원가입
app.post("/signup", (req, res) => {
  const { userId, userPassword } = req.body;
  const sql = "INSERT INTO users (userId, userPassword) VALUES (?, ?)";
  db.query(sql, [userId, userPassword], (err, result) => {
    if (err) return res.status(500).json({ message: "DB 오류" });
    res.status(201).json({ message: "회원가입 성공" });
  });
});

//회원탈퇴
app.post("/signoff", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.status(401).json({ message: "로그인 상태가 아닙니다." });
  }

  const sql = "DELETE FROM users WHERE userId = ?";
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("회원 탈퇴 오류:", err);
      return res.status(500).json({ message: "회원 탈퇴 실패" });
    }

    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({ message: "회원 탈퇴 완료" });
    });
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
