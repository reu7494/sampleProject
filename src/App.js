import { useState } from "react";

let initialList = [
  { id: 0, name: "Hello" },
  { id: 1, name: "World!" },
];
let nextId = 2;

export default function List() {
  const [name, setName] = useState("");
  const [list, setList] = useState(initialList);

  return (
    <>
      <h1>My Lists</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setList([...list, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {list.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
    </>
  );
}
