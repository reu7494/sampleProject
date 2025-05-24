import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ListLogin({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "reu7494@naver.com" && password === "1234") {
      onLogin(userName, password);
    }
  }

  function goToSignup() {
    navigate("/signup");
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
    </form>
  );
}
