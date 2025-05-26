import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ListLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "reu7494@naver.com" && password === "1234") {
      alert("성공");
      navigate("/mainboard");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  }

  function goToSignup() {
    navigate("/signup");
  }

  function goToHome() {
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="reu7494@naver.com"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="1234"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
      <button onChlick={goToSignup}>Sign up</button>
      <button onChlick={goToHome}>Home</button>
    </form>
  );
}
