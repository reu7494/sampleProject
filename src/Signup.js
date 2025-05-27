import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    alert("회원가입 성공");
    navigate("/login", {
      state: {
        userId,
        userPassword,
      },
    });
  }
  // 데이터 유지 구현
  function handleHome() {
    navigate("/");
  }

  return (
    <div>
      <input
        type="email"
        value={userId}
        placeholder="이메일 입력"
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
      <button className="button-space" onClick={handleLogin}>
        SignUp
      </button>
      <button className="button-space" onClick={handleHome}>
        Home
      </button>
    </div>
  );
}
