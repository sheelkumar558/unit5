import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
      console.log("Mouted todos");
    getData();

    return ()=>{
        console.log("Unmounting todos");
    }
  }, [page]);
  const getData = async () => {
    const data = await fetch(
      `http://localhost:8080/todos?_page=${page}&_limit=3`
    ).then((d) => d.json());
    setTodos(data);
    setLoading(false);
  };
  return loading ? (
    "loading......"
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="enter todos"
      />
      <button
        onClick={() => {
          const payload = {
            name: text,
            status: false,
          };
          fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getData();
          });
        }}
      >
        Add Todos
      </button>
      {todos.map((t) => (
        <div>
          {t.id}-{t.name}
        </div>
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
