import { useState } from "react";
import { ToMyList } from "./ToMyList";

let nextId = 3;

const initialList = [
  { id: 0, title: "Hello", seen: true },
  { id: 1, title: "World", seen: false },
  { id: 2, title: "Hello World", seen: true },
];

export default function CheckList() {
  const [checkList, setCheckList] = useState(initialList);
  const [name, setName] = useState("");
  const [modify, setModify] = useState(false);

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

  function handleAdd() {
    setCheckList([...checkList, { id: nextId++, title: name, seen: false }]);
    setName("");
  }

  function handleDelete() {
    setCheckList(checkList.filter((check) => check.seen !== true));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setModify(!modify);
      }}
    >
      <h1>Check List</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button className="button-space" onClick={handleAdd}>
        Add
      </button>
      <button className="button-space" onClick={handleDelete}>
        Delete
      </button>
      {/* {modify ? (
        <input
          value={checkList}
          onChange={(e) => {
            setCheckList(e.target.value);
          }}
        />
      ) : (
        { checkList }
      )}
      <button className="button-space" type="submit">
        {modify ? "Save" : "Edit"}
      </button> */}
      <ToMyList
        lists={checkList}
        setLists={setCheckList}
        onToggle={handleToggle}
      />
    </form>
  );
}
