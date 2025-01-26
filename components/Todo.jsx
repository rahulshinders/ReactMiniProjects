import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div>
      <input value={newTodo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>add</button>
      {todos &&
        todos.map((todo, index) => (
          <ul key={index}>
            <li>{todo}</li>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </ul>
        ))}
    </div>
  );
};

export default Todo;
