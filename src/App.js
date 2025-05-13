import { useState } from "react";

let initialList = [
  { id: 0, name: "Hello" },
  { id: 1, name: "World!" },
];
let nextId = 2;

export default function List() {
  const [name, setName] = useState("");
  const [lists, setLists] = useState(initialList);

  function handleAdd() {
    if (name.trim() === "") return;
    setLists([...lists, { id: nextId++, name: name }]);
    setName("");
  }

  return (
    <>
      <h1>My Lists</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            {list.name}
            <button
              onClick={() => setLists(lists.filter((l) => l.id !== list.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
