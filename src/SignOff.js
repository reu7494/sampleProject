import { useNavigate } from "react-router-dom";

export function SignOff() {
  const navigate = useNavigate();

  function handleSignout() {
    if (!window.confirm("정말로 회원 탈퇴하시겠습니까?")) return;

    fetch("http://localhost:8000/signoff", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        navigate("/");
      })
      .catch((err) => {
        console.error("회원 탈퇴 오류:", err);
        alert("회원 탈퇴 중 오류가 발생했습니다.");
      });
  }

  return (
    <button className="button-space" onClick={handleSignout}>
      Signout
    </button>
  );
}
