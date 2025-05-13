import { useState } from "react";
export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function ChangeColor() {
    setIsDarkMode(!isDarkMode);
  }

  const appClassName = `app ${isDarkMode ? "dark" : "light"}`;

  return (
    <div className={appClassName}>
      <h1>{isDarkMode ? "다크모드" : "라이트모드"}</h1>
      <button onClick={ChangeColor}>
        {isDarkMode ? "라이트모드 전환" : "다크모드 전환"}
      </button>
    </div>
  );
}
