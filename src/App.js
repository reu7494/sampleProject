import { useState, useEffect } from "react";
import { ListLogin } from "./ListLogin";
import { Home } from "./Home";
import { MainBoard } from "./MainBoard";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  function handleLogin(userName, password) {
    if (userName === "reu7494@naver.com" && password === "1234") {
      const fakeToken = "FAKE_TOKEN_123";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      alert("성공");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    alert("성공");
    navigate("/");
  }

  return (
    <div>
      {token ? (
        <MainBoard onLogout={handleLogout} />
      ) : (
        <ListLogin onLogin={handleLogin} />
      )}
    </div>
  );
}
