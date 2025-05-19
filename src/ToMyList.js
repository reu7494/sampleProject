export function ToMyList({ lists, onToggle, deleteButton }) {
  return (
    <ul>
      {lists.map((list) => (
        <li key={list.id}>
          <label>
            <input
              type="checkbox"
              checked={list.seen}
              onChange={(e) => {
                onToggle(list.id, e.target.checked);
              }}
            />
            {""}
            {list.title}
          </label>
          <button
            className="button-space"
            onClick={() => deleteButton(list.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
