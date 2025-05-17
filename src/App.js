import { useState } from "react";
import { ItemList } from "./ItemList";
const initialList = [
  { id: 0, title: "Hello", seen: true },
  { id: 1, title: "World", seen: true },
  { id: 2, title: "Hello World", seen: true },
];

export default function CheckList() {
  const [checkList, setCheckList] = useState(initialList);

  function handleToggle(id, nextSeen) {
    setCheckList(
      checkList.map((prev) => {
        if (prev.id === id) {
          return { ...prev, seen: nextSeen };
        } else {
          return prev;
        }
      })
    );
  }

  return (
    <div>
      <h1>Check List</h1>
      <ItemList lists={checkList} onToggle={handleToggle} />
    </div>
  );
}
