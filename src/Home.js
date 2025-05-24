import { useNavigate } from "react-router-dom";

export function Home({ onLogin, onSignup }) {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }
  return (
    <div>
      <h1>환영합니다!</h1>
      <button onClick={goToLogin}>Login</button>
      <button onClick={onSignup}>Signup</button>
    </div>
  );
}
