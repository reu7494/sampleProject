import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ListLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const savedId = localStorage.getItem("userId");
  const savedPw = localStorage.getItem("userPassword");

  function handleLogin() {
    if (userName === savedId && password === savedPw) {
      alert("성공");
      navigate("/mainboard");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
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
