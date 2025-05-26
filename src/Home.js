import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  function goToSignUp() {
    alert("구현중");
    //navigate("/signup");
  }
  return (
    <div>
      <h1>환영합니다!</h1>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToSignUp}>Signup</button>
    </div>
  );
}
