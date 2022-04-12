 import "./Todo.css";

export const TodoItem = ({ todo,handleStatus }) => {
  return (
    <div className="title">
      {/* <div>{todo.id}</div> */}
      {todo.title}   
      {/* {todo.status ? "Done" : "Not done"} */}
      <button className="btn" onClick={()=> handleStatus(todo.id)}></button>
    </div>
  );
};
