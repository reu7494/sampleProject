import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ListLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: userName,
        userPassword: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "로그인 성공") {
          alert("로그인 성공!");
          navigate("/mainboard");
        } else {
          alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
      })
      .catch((err) => {
        console.error("서버 오류:", err);
        alert("서버 오류가 발생했습니다.");
      });
  }

  function handleSignup() {
    navigate("/signup");
  }

  function handleHome() {
    navigate("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="아이디"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="button-space" onClick={handleLogin}>
        Login
      </button>
      <button className="button-space" onClick={handleSignup}>
        Sign up
      </button>
      <button className="button-space" onClick={handleHome}>
        Home
      </button>
    </div>
  );
}
