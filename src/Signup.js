import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup() {
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        userPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "회원가입 성공") {
          alert("회원가입 성공");
          navigate("/login");
        } else {
          alert("회원가입 실패");
        }
      })
      .catch((error) => {
        console.error("에러 발생:", error);
        alert("서버 오류가 발생했습니다.");
      });
  }
  function handleHome() {
    navigate("/");
  }

  return (
    <div>
      <h1>Sign Up</h1>
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
