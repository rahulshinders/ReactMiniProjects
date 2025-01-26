import React, { useState } from "react";

const Search = () => {
  // State for storing todos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Handle adding new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo("");
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter todos based on search term
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo App</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <br />
      {/* New Todo input */}
      <input
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* Todo List */}
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <li key={todo.id}>{todo.text}</li>)
        ) : (
          <p>No todos found</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
