import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function ListLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUserName(location.state?.userId);
      setPassword(location.state?.userPassword);
    }
  }, [location.state]);

  function handleLogin() {
    if (
      userName === location.state?.userId &&
      password === location.state?.userPassword
    ) {
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
        type="email"
        placeholder="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
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
