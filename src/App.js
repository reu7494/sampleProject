import { useState } from "react";
import { ToMyList } from "./ToMyList";

const initialList = [
  { id: 0, title: "Hello", seen: true },
  { id: 1, title: "World", seen: false },
  { id: 2, title: "Hello World", seen: true },
];

export default function CheckList() {
  const [checkList, setCheckList] = useState(initialList);

  function handleToggle(mylist, nextSeen) {
    setCheckList(
      checkList.map((prev) => {
        if (prev.id === mylist) {
          return { ...prev, seen: nextSeen };
        } else {
          return prev;
        }
      })
    );
  }

  function handleDelete(listId) {
    setCheckList(checkList.filter((check) => check.id !== listId));
  }

  return (
    <div>
      <h1>Check List</h1>
      <ToMyList
        lists={checkList}
        onToggle={handleToggle}
        deleteButton={handleDelete}
      />
    </div>
  );
}
