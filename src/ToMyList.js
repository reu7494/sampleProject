import { useState } from "react";

export function ToMyList({ lists, onToggle, onEdit }) {
  const [editState, setEditState] = useState({});
  const [editInput, setEditInput] = useState({});

  const handleEditToggle = (id, currentTitle) => {
    setEditState((prev) => ({ ...prev, [id]: !prev[id] }));
    setEditInput((prev) => ({ ...prev, [id]: currentTitle }));
  };

  const handleEditChange = (id, newValue) => {
    setEditInput((prev) => ({ ...prev, [id]: newValue }));
  };

  const handleSave = (id) => {
    onEdit(id, editInput[id]);
    setEditState((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id}>
          <label>
            <input
              type="checkbox"
              checked={list.seen}
              onChange={(e) => onToggle(list.id, e.target.checked)}
            />
            {editState[list.id] ? (
              <input
                value={editInput[list.id]}
                onChange={(e) => handleEditChange(list.id, e.target.value)}
              />
            ) : (
              <span>{list.title}</span>
            )}
          </label>
          {editState[list.id] ? (
            <button onClick={() => handleSave(list.id)}>Save</button>
          ) : (
            <button onClick={() => handleEditToggle(list.id, list.title)}>
              Edit
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
