import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup() {
    localStorage.setItem("userId", userId);
    localStorage.setItem("userPassword", userPassword);
    alert("회원가입 성공");
    navigate("/login");
  }
  // 서버 구현
  function handleHome() {
    navigate("/");
  }

  return (
    <div>
      <input
        type="text"
        value={userId}
        placeholder="아이디 입력"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="password"
        value={userPassword}
        placeholder="비밀번호 입력"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <button className="button-space" onClick={handleSignup}>
        SignUp
      </button>
      <button className="button-space" onClick={handleHome}>
        Home
      </button>
    </div>
  );
}
