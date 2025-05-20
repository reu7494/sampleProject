import { useState } from "react";

export function ToMyList({ lists, onToggle }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleIsEdit(id) {
    setIsEdit((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id}>
          <label>
            <input
              type="checkbox"
              checked={list.seen}
              onChange={(e) => {
                onToggle(list.id, e.target.checked);
              }}
            />
            {""}
            {list.title}
          </label>
          <button onClick={() => handleIsEdit(list.id)}>
            {isEdit[list.id] ? "True" : "False"}
          </button>
        </li>
      ))}
    </ul>
  );
}
