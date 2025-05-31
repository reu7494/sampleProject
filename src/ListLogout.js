import { useNavigate } from "react-router-dom";

export function ListLogout() {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://localhost:8000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || "로그아웃 완료");
        navigate("/");
      })
      .catch((err) => {
        console.error("로그아웃 에러:", err);
        alert("로그아웃 중 오류 발생");
      });
  }

  return (
    <button className="button-space" onClick={handleLogout}>
      Logout
    </button>
  );
}
