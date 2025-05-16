import { useState } from "react";

const list = [
  {
    id: 0,
    text: "Hello World",
    seen: true,
  },
  {
    id: 1,
    text: "Hello ",
    seen: true,
  },
];

export default function App() {
  const [items, setItems] = useState([list]);
  const [text, setText] = useState();

  function handleAddItem(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: text,
      seen: false,
    };

    setItems([...items, newItem]);
    setText("");
  }

  function handleToggle(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, seen: !item.seen } : item
      )
    );
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h2>Packing Checklist</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add item"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <inupt
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(item.id)}
              />
              {item.text}
            </label>
            <button onClick={handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
