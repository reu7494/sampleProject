import { useState } from "react";
export default function RockPaperScissors() {
  const choices = ["가위", "바위", "보"];
  const [userChoices, setUserChoices] = useState();
  const [computerChoices, setComputerChoices] = useState();
  const [result, setResult] = useState();

  function playGame(userPick) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerPick = choices[randomIndex];
    if (computerPick === userPick) {
      setResult("무승부");
    } else if (
      (userPick === "가위" && computerPick === "보") ||
      (userPick === "바위" && computerPick === "가위") ||
      (userPick === "보" && computerPick === "바위")
    ) {
      setResult("유저 승리");
    } else {
      setResult("컴퓨터 승리");
    }
    setUserChoices(userPick);
    setComputerChoices(computerPick);
  }
  return (
    <>
      <h2>가위 바위 보 게임</h2>
      <div className="button">
        {choices.map((choices) => (
          <button key={choices} onClick={() => playGame(choices)}>
            {choices}
          </button>
        ))}
      </div>

      <div className="result">
        <p>나의 선택: {userChoices}</p>
        <p>컴퓨터의 선택: {computerChoices}</p>
        <p
          className={`result-text ${
            result === "유저 승리"
              ? "win"
              : result === "컴퓨터 승리"
              ? "lose"
              : "draw"
          }`}
        >
          {result}
        </p>
      </div>
    </>
  );
}
