import { useState, useEffect } from "react";
import { ToMyList } from "./ToMyList";
import { ListLogout } from "./ListLogout";
import { SignOff } from "./SignOff";
import ReactPaginate from "react-paginate";

export function MainBoard() {
  const [checkList, setCheckList] = useState([]);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:8000/checklist", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCheckList(data))
      .catch((err) => console.error("데이터 불러오기 실패", err));
  }, []);

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
      .then((newItem) => {
        setCheckList([...checkList, newItem]);
        setName("");
      })
      .catch((err) => console.error("추가 실패", err));
  }

  function handleDelete() {
    fetch("http://localhost:8000/checklist", {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:8000/checklist", {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => setCheckList(data));
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

  const offset = currentPage * itemsPerPage;
  const currentItems = checkList.slice(offset, offset + itemsPerPage);

  function handlePageChange({ selected }) {
    setCurrentPage(selected);
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
      <ToMyList
        lists={currentItems}
        onToggle={handleToggle}
        onEdit={handleEdit}
      />
      <div className="container">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(checkList.length / itemsPerPage)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
