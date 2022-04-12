import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const getData = (todo) => {
    //console.log("Received", todo);
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todoList, payload]);
  };
  const handleStatus = (id) => {
    console.log("id:", id);
    setTodoList([
      ...todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)),
    ]);
    //find this id from todolist
    // toggle it's status
    // get new arr, set it again
  };
  return (
    <div>
      
      {todoList.map((e) => (
        <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
      ))}
     <TodoInput getData={getData} />

    </div>
  );
}

export { Todo };
