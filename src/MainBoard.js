import { useState, useEffect } from "react";
import { ToMyList } from "./ToMyList";
import { ListLogout } from "./ListLogout";
import { SignOff } from "./SignOff";
import { SimplePagination } from "./SimplePagination";

export function MainBoard() {
  const [checkList, setCheckList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/checklist", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCheckList(data))
      .catch((err) => console.error("데이터 불러오기 실패", err));
  }, []);
  //랜더링 시 checkList 데이터 불러오기 이제 리액트의 동작이 대충 이해가 되는것 같다

  function handleToggle(id, nextSeen) {
    fetch(`http://localhost:8000/checklist/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seen: nextSeen }),
    }).then(() => {
      setCheckList(
        checkList.map((prev) =>
          prev.id === id ? { ...prev, seen: nextSeen } : prev
        )
      );
    });
  }

  function handleAdd() {
    if (name.trim() === "") return;
    fetch("http://localhost:8000/checklist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title: name }),
    })
      .then((res) => res.json())
      .then(() => {
        setCheckList([...checkList, { title: name, seen: false }]);
        setName("");
      });
  }

  function handleDelete() {
    fetch("http://localhost:8000/checklist", {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        setCheckList(checkList.filter((check) => !check.seen));
      })
      .catch((err) => console.error("삭제 실패", err));
  }

  function handleEdit(id, newTitle) {
    fetch(`http://localhost:8000/checklist/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((res) => res.json())
      .then(() =>
        setCheckList(
          checkList.map((item) =>
            item.id === id ? { ...item, title: newTitle } : item
          )
        )
      )
      .catch((err) => console.error("업데이트 실패", err));
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
      <ListLogout />
      <SignOff />
      <ToMyList lists={checkList} onToggle={handleToggle} onEdit={handleEdit} />
      <SimplePagination item={checkList} />
    </div>
  );
}
