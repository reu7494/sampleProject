import { useState } from "react";
import { ToMyList } from "./ToMyList";

let nextId = 3;

export default function CheckList() {
  const [checkList, setCheckList] = useState([
    { id: 0, title: "Hello", seen: true },
    { id: 1, title: "World", seen: false },
    { id: 2, title: "Hello World", seen: false },
  ]);
  const [name, setName] = useState("");

  function handleToggle(mylist, nextSeen) {
    setCheckList(
      checkList.map((prev) =>
        prev.id === mylist ? { ...prev, seen: nextSeen } : prev
      )
    );
  }

  function handleAdd() {
    if (name.trim() === "") return;
    setCheckList([...checkList, { id: nextId++, title: name, seen: false }]);
    setName("");
  }

  function handleDelete() {
    setCheckList(checkList.filter((check) => !check.seen));
  }

  function handleEdit(id, newTitle) {
    setCheckList(
      checkList.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  }

  return (
    <div>
      <h1>Check List</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button className="button-space" onClick={handleAdd}>
        Add
      </button>
      <button className="button-space" onClick={handleDelete}>
        Delete
      </button>
      <ToMyList lists={checkList} onToggle={handleToggle} onEdit={handleEdit} />
    </div>
  );
}
