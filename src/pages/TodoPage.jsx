import { useState } from "react";

function TodoPage() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Read React docs", completed: true },
    { id: 2, text: "Build to do app", completed: false },
  ]);

  function handleAddTodo() {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedValue,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  }

  function handleToggleTodo(todoId) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div>
      <h2>Todo Lab</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Add a todo"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleAddTodo();
          }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <p>Total: {totalTodos}</p>
      <p>Active: {activeTodos}</p>
      <p>Completed: {completedTodos}</p>
      {todos.length}
      {todos.length === 0 ? (
        <p> No todos yet.</p>
      ) : (
        <ul style={{ paddingLeft: "20px" }}>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: "12px" }}>
              <span
                style={{
                  marginRight: "12px",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleToggleTodo(todo.id)}
                style={{ marginRight: "8px" }}
              >
                {todo.completed ? "Undo" : "Completed"}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoPage;
