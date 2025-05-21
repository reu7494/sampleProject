import { useState } from "react";

export function ToMyList({ lists, onToggle }) {
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
        </li>
      ))}
    </ul>
  );
}
