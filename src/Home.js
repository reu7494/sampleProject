import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  function goToSignUp() {
    navigate("/signup");
  }
  return (
    <div>
      <h1>환영합니다!</h1>
      <button className="button-space" onClick={goToLogin}>
        Login
      </button>
      <button className="button-space" onClick={goToSignUp}>
        Signup
      </button>
    </div>
  );
}
