import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handleClicker(target) {
    return function (e) {
      setPlayer({
        ...player,
        [target]:
          typeof player[target] === "number"
            ? player[target] + 1
            : e.target.value,
      });
    };
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handleClicker("score")}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleClicker("firstName")} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleClicker("lastName")} />
      </label>
    </>
  );
}
